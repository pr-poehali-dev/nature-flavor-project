import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const BERRY = "hsl(340,62%,45%)";
const DARK = "hsl(30,25%,14%)";
const CREAM = "hsl(44,50%,97%)";
const AMBER = "hsl(34,70%,58%)";
const AMBER_DARK = "hsl(34,60%,44%)";

// Centre of the composition
const CX = 100;
const CY = 82;

// Generate sunray line endpoints
function sunray(angleDeg: number, r0: number, r1: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x0 = CX + r0 * Math.sin(rad);
  const y0 = CY - r0 * Math.cos(rad);
  const x1 = CX + r1 * Math.sin(rad);
  const y1 = CY - r1 * Math.cos(rad);
  return { x0, y0, x1, y1 };
}

const RAYS = 16;
const rayAngles = Array.from({ length: RAYS }, (_, i) => -90 + (i * 180) / (RAYS - 1));

const Logo: React.FC<LogoProps> = ({ width = 160, height = 160, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
      aria-label="Море Ягод"
      role="img"
    >
      {/* ── Background circle ── */}
      <circle cx={CX} cy={CY} r={72} fill={CREAM} stroke={DARK} strokeWidth="1.5" />

      {/* ── Sunrays ── */}
      {rayAngles.map((angle, i) => {
        const { x0, y0, x1, y1 } = sunray(angle, 14, 70);
        return (
          <line
            key={i}
            x1={x0}
            y1={y0}
            x2={x1}
            y2={y1}
            stroke={BERRY}
            strokeWidth="1"
            strokeOpacity="0.22"
          />
        );
      })}

      {/* ── Decorative wave / hill silhouette ── */}
      {/* Sits just above the ribbon, gives grounding to the figure */}
      <path
        d={`
          M 48 136
          Q 62 122, 76 128
          Q 88 133, 100 126
          Q 112 119, 124 128
          Q 138 137, 152 132
          L 152 145 L 48 145 Z
        `}
        fill={BERRY}
        opacity="0.18"
      />

      {/* ── Stylised figure ── */}

      {/* Head */}
      <circle
        cx={CX}
        cy={50}
        r={9}
        fill={CREAM}
        stroke={DARK}
        strokeWidth="1.8"
      />

      {/* Neck */}
      <rect
        x={97.5}
        y={58.5}
        width={5}
        height={6}
        rx={1}
        fill={DARK}
      />

      {/* Torso – slightly trapezoid via path */}
      <path
        d="M 89 65 L 111 65 L 108 105 L 92 105 Z"
        fill={BERRY}
        stroke={DARK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Collar / lapel detail */}
      <path
        d="M 97 65 L 100 72 L 103 65"
        fill={CREAM}
        stroke={DARK}
        strokeWidth="0.9"
        strokeLinejoin="round"
      />

      {/* Left arm (viewer right) – crossed over, going lower-left to upper-right */}
      <line
        x1={91}
        y1={100}
        x2={109}
        y2={78}
        stroke={DARK}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1={91}
        y1={100}
        x2={109}
        y2={78}
        stroke={BERRY}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Right arm (viewer left) – crossed over, going lower-right to upper-left */}
      <line
        x1={109}
        y1={100}
        x2={91}
        y2={78}
        stroke={DARK}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1={109}
        y1={100}
        x2={91}
        y2={78}
        stroke={BERRY}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Legs */}
      {/* Left leg */}
      <line
        x1={95}
        y1={105}
        x2={89}
        y2={132}
        stroke={DARK}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1={95}
        y1={105}
        x2={89}
        y2={132}
        stroke={BERRY}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Right leg */}
      <line
        x1={105}
        y1={105}
        x2={111}
        y2={132}
        stroke={DARK}
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <line
        x1={105}
        y1={105}
        x2={111}
        y2={132}
        stroke={BERRY}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Shoes / feet */}
      <ellipse cx={87} cy={133.5} rx={6} ry={3} fill={DARK} />
      <ellipse cx={113} cy={133.5} rx={6} ry={3} fill={DARK} />

      {/* ── Ribbon / banner ── */}
      {/*
          The ribbon is made of:
          - A central flat-topped trapezoid body
          - Two curled end tabs, one on each side
      */}

      {/* Left curl tab */}
      <path
        d={`
          M 44 152
          C 38 150, 36 158, 42 158
          L 56 158 L 56 148 L 44 148 Z
        `}
        fill={AMBER_DARK}
        stroke={DARK}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Left curl shadow fold */}
      <path
        d={`
          M 44 158
          C 36 158, 38 166, 44 164
          L 56 164 L 56 158 Z
        `}
        fill={AMBER}
        stroke={DARK}
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Right curl tab */}
      <path
        d={`
          M 156 152
          C 162 150, 164 158, 158 158
          L 144 158 L 144 148 L 156 148 Z
        `}
        fill={AMBER_DARK}
        stroke={DARK}
        strokeWidth="1"
        strokeLinejoin="round"
      />
      {/* Right curl shadow fold */}
      <path
        d={`
          M 156 158
          C 164 158, 162 166, 156 164
          L 144 164 L 144 158 Z
        `}
        fill={AMBER}
        stroke={DARK}
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* Main ribbon body */}
      <path
        d={`
          M 56 146
          L 144 146
          L 144 164
          L 56 164 Z
        `}
        fill={AMBER}
        stroke={DARK}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* Thin highlight stripe on ribbon */}
      <line
        x1={56}
        y1={149.5}
        x2={144}
        y2={149.5}
        stroke={CREAM}
        strokeWidth="1"
        strokeOpacity="0.5"
      />

      {/* ── Banner text ── */}
      <text
        x={CX}
        y={158.5}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="bold"
        fontSize="11.5"
        letterSpacing="1.5"
        fill={DARK}
      >
        МОРЕ ЯГОД
      </text>

      {/* ── Outer decorative border ── */}
      <circle
        cx={CX}
        cy={CY}
        r={72}
        fill="none"
        stroke={BERRY}
        strokeWidth="0.8"
        strokeOpacity="0.5"
      />
    </svg>
  );
};

export default Logo;
