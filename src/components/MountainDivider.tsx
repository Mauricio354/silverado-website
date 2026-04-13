export function MountainDivider({
  fillColor = "#1a1a1a",
  bgColor = "#fafcfe",
}: {
  fillColor?: string;
  bgColor?: string;
}) {
  return (
    <div className="w-full leading-[0] -mb-px" style={{ background: bgColor }}>
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[40px] md:h-[60px] lg:h-[80px] block"
      >
        <path
          d="M0,0 L0,30 Q60,55 120,35 Q180,15 240,40 Q300,65 360,30 Q420,0 480,25 Q540,50 600,20 Q660,0 720,35 Q780,60 840,25 Q900,0 960,30 Q1020,55 1080,20 Q1140,0 1200,35 Q1260,60 1320,25 Q1380,0 1440,30 L1440,0 Z"
          fill={bgColor}
        />
        <path
          d="M0,80 L0,50 Q60,25 120,45 Q180,65 240,40 Q300,15 360,50 Q420,80 480,55 Q540,30 600,60 Q660,80 720,45 Q780,20 840,55 Q900,80 960,50 Q1020,25 1080,60 Q1140,80 1200,45 Q1260,20 1320,55 Q1380,80 1440,50 L1440,80 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export function TreelineDivider({
  fillColor = "#1a1a1a",
  bgColor = "transparent",
}: {
  fillColor?: string;
  bgColor?: string;
}) {
  return (
    <div className="w-full leading-[0] -mb-px" style={{ background: bgColor }}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[30px] md:h-[45px] lg:h-[60px] block"
      >
        <path
          d="M0,60 L0,40 L40,42 L60,20 L65,30 L70,12 L75,28 L80,8 L85,25 L95,40
             L140,38 L155,18 L160,28 L165,8 L170,25 L175,5 L180,22 L190,36
             L240,34 L255,14 L260,24 L265,6 L270,22 L275,3 L280,20 L290,34
             L340,32 L355,12 L360,22 L365,4 L370,20 L375,2 L380,18 L390,32
             L440,30 L455,10 L460,20 L465,3 L470,18 L475,1 L480,16 L490,30
             L540,32 L555,12 L560,22 L565,4 L570,20 L575,2 L580,18 L590,32
             L640,30 L655,10 L660,20 L665,3 L670,18 L675,1 L680,16 L690,30
             L740,32 L755,12 L760,22 L765,4 L770,20 L775,2 L780,18 L790,32
             L840,30 L855,10 L860,20 L865,3 L870,18 L875,1 L880,16 L890,30
             L940,32 L955,12 L960,22 L965,4 L970,20 L975,2 L980,18 L990,32
             L1040,30 L1055,10 L1060,20 L1065,3 L1070,18 L1075,1 L1080,16 L1090,30
             L1140,32 L1155,12 L1160,22 L1165,4 L1170,20 L1175,2 L1180,18 L1190,32
             L1240,30 L1255,10 L1260,20 L1265,3 L1270,18 L1275,1 L1280,16 L1290,30
             L1340,32 L1355,12 L1360,22 L1365,4 L1370,20 L1375,2 L1380,18 L1390,32
             L1440,30 L1440,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
