import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { FiArrowDown } from 'react-icons/fi';

const ACCENT = '#2563eb';
const BORDER = '#d4d4d8';
const NODE_W = 176;
const NODE_H = 92;
const GAP = 40;
const STEP = NODE_W + GAP;

const ProjectFlow = ({ nodes, loop }) => {
  const width = nodes.length * STEP - GAP;
  const height = loop ? 190 : 150;

  return (
    <Box>
      <Heading as="h4" fontSize="sm" fontWeight={600} mb={3}>
        How the system flows
      </Heading>

      {/* Desktop / tablet: horizontal SVG diagram */}
      <Box display={{ base: 'none', md: 'block' }} overflowX="auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          style={{ minWidth: `${Math.min(width, 640)}px`, display: 'block' }}
          role="img"
          aria-label="Project system flow diagram"
        >
          <defs>
            <marker
              id="flow-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 Z" fill={ACCENT} opacity="0.7" />
            </marker>
          </defs>

          {nodes.map((node, i) => {
            const x = i * STEP;
            const y = 40;
            const isNext = i < nodes.length - 1;
            return (
              <g key={node.label}>
                {isNext && (
                  <line
                    x1={x + NODE_W}
                    y1={y + NODE_H / 2}
                    x2={x + NODE_W + GAP - 6}
                    y2={y + NODE_H / 2}
                    stroke={ACCENT}
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    markerEnd="url(#flow-arrow)"
                  />
                )}
                <rect
                  x={x}
                  y={y}
                  width={NODE_W}
                  height={NODE_H}
                  rx="6"
                  fill="#fafafa"
                  stroke={BORDER}
                  strokeWidth="1"
                />
                <foreignObject x={x + 14} y={y + 10} width={NODE_W - 28} height={NODE_H - 20}>
                  <div style={{ fontFamily: "'Inter', sans-serif" }}>
                    <div
                      style={{
                        color: ACCENT,
                        fontSize: '10px',
                        fontWeight: 600,
                        marginBottom: '5px',
                      }}
                    >
                      {i + 1}
                    </div>
                    <div
                      style={{
                        color: '#18181b',
                        fontSize: '12.5px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: '3px',
                      }}
                    >
                      {node.label}
                    </div>
                    <div
                      style={{
                        color: '#71717a',
                        fontSize: '11px',
                        lineHeight: 1.4,
                      }}
                    >
                      {node.detail}
                    </div>
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {loop && (
            <g>
              <path
                d={`M ${loop.from * STEP + NODE_W / 2} 132
                    C ${loop.from * STEP + NODE_W / 2} 168,
                      ${loop.to * STEP + NODE_W / 2} 168,
                      ${loop.to * STEP + NODE_W / 2} 132`}
                fill="none"
                stroke={ACCENT}
                strokeOpacity="0.45"
                strokeWidth="1.25"
                strokeDasharray="3 3"
                markerEnd="url(#flow-arrow)"
              />
              <foreignObject
                x={Math.min(loop.from, loop.to) * STEP}
                y={164}
                width={Math.abs(loop.from - loop.to) * STEP + NODE_W}
                height={20}
              >
                <div
                  style={{
                    textAlign: 'center',
                    color: '#71717a',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '10px',
                    fontWeight: 500,
                  }}
                >
                  {loop.label}
                </div>
              </foreignObject>
            </g>
          )}
        </svg>
      </Box>

      {/* Mobile: vertical stacked list */}
      <VStack align="stretch" spacing={0} display={{ base: 'flex', md: 'none' }}>
        {nodes.map((node, i) => (
          <Box key={node.label}>
            <Box border="1px solid" borderColor="gray.200" borderRadius="6px" bg="gray.50" p={4}>
              <Text fontSize="xs" fontWeight={600} color="accent.600" mb={1}>
                {i + 1}
              </Text>
              <Text fontWeight={600} fontSize="sm" mb={0.5}>
                {node.label}
              </Text>
              <Text fontSize="xs" color="gray.500" lineHeight="1.5">
                {node.detail}
              </Text>
            </Box>
            {i < nodes.length - 1 && (
              <Box display="flex" justifyContent="center" py={1.5} color="gray.400">
                <FiArrowDown size={14} />
              </Box>
            )}
          </Box>
        ))}
        {loop && (
          <Text fontSize="xs" color="gray.500" textAlign="center" pt={3}>
            ↺ {loop.label}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

export default ProjectFlow;
