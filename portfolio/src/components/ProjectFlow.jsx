import { Box, Text, VStack } from '@chakra-ui/react';
import { FiArrowDown } from 'react-icons/fi';

const accentHex = {
  cyan: '#22d3ee',
  blue: '#3b82f6',
  green: '#10b981',
  purple: '#a855f7',
  amber: '#f59e0b',
};

const NODE_W = 176;
const NODE_H = 92;
const GAP = 40;
const STEP = NODE_W + GAP;

const ProjectFlow = ({ nodes, loop, accent = 'cyan' }) => {
  const color = accentHex[accent] || accentHex.cyan;
  const width = nodes.length * STEP - GAP;
  const height = loop ? 190 : 150;
  const arrowId = `flow-arrow-${accent}`;

  return (
    <Box>
      <Text className="mono-label" color="brand.300" mb={4}>
        SYSTEM FLOW
      </Text>

      {/* Desktop / tablet: horizontal SVG diagram */}
      <Box display={{ base: 'none', md: 'block' }} overflowX="auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          width="100%"
          style={{ minWidth: `${Math.min(width, 720)}px`, display: 'block' }}
          role="img"
          aria-label="Project system flow diagram"
        >
          <defs>
            <marker
              id={arrowId}
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 Z" fill={color} opacity="0.85" />
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
                    stroke={color}
                    strokeOpacity="0.55"
                    strokeWidth="1.5"
                    markerEnd={`url(#${arrowId})`}
                  />
                )}
                <rect
                  x={x}
                  y={y}
                  width={NODE_W}
                  height={NODE_H}
                  rx="2"
                  fill="rgba(7, 16, 29, 0.9)"
                  stroke={color}
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <foreignObject x={x + 14} y={y + 10} width={NODE_W - 28} height={NODE_H - 20}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    <div
                      style={{
                        color,
                        fontSize: '9px',
                        letterSpacing: '0.08em',
                        opacity: 0.9,
                        marginBottom: '6px',
                      }}
                    >
                      0{i + 1}
                    </div>
                    <div
                      style={{
                        color: '#e5e7eb',
                        fontFamily: "'Sora', sans-serif",
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        marginBottom: '4px',
                      }}
                    >
                      {node.label}
                    </div>
                    <div
                      style={{
                        color: '#64748b',
                        fontFamily: "'Sora', sans-serif",
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
                stroke={color}
                strokeOpacity="0.4"
                strokeWidth="1.25"
                strokeDasharray="3 3"
                markerEnd={`url(#${arrowId})`}
              />
              <foreignObject
                x={Math.min(loop.from, loop.to) * STEP}
                y={162}
                width={Math.abs(loop.from - loop.to) * STEP + NODE_W}
                height={20}
              >
                <div
                  style={{
                    textAlign: 'center',
                    color: '#64748b',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '9px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
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
            <Box
              border="1px solid"
              borderColor={`${accent}.700`}
              borderRadius="2px"
              bg="rgba(7, 16, 29, 0.9)"
              p={4}
            >
              <Text className="mono-label" color={`${accent}.300`} mb={2}>
                0{i + 1}
              </Text>
              <Text fontWeight="600" fontSize="sm" color="gray.200" mb={1}>
                {node.label}
              </Text>
              <Text fontSize="xs" color="gray.500" lineHeight="1.5">
                {node.detail}
              </Text>
            </Box>
            {i < nodes.length - 1 && (
              <Box display="flex" justifyContent="center" py={2} color="gray.600">
                <FiArrowDown />
              </Box>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ProjectFlow;
