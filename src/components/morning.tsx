import EnoPad from "./eno_pads";

export default function Morning() {
  return (
    <>
      <EnoPad
        width={45}
        height={45}
        triggerKey="l"
        videoName="nmv4.webm"
        shape="plane"
        position1={[0, 0, 0]}
        notes={["D3", "A3", "E4", "E4"]}
      />

      <EnoPad
        width={35}
        height={35}
        triggerKey="k"
        videoName="nmv5.webm"
        shape="circle"
        position1={[-25, 0, -5]}
        notes={["F3", "C4", "G4", "A3"]}
      />

      <EnoPad
        width={35}
        height={35}
        triggerKey="j"
        videoName="nmv6.webm"
        shape="plane"
        position1={[25, 0, -5]}
        notes={["A2", "E3", "B3", "A4"]}
      />

      <EnoPad
        width={25}
        height={25}
        triggerKey="i"
        videoName="nmv7.webm"
        shape="circle"
        position1={[0, 12, -10]}
        notes={["C3", "G3", "D4","G4" ]}
      />
    </>
  );
}