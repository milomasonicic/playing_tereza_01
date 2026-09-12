import Pano from "./expl_01"

export default function Test2()
{

 return(
    <>
       <Pano 
       width={30}
       height={60} 
       triggerKey="l"
       videoName="stena2.mp4"
       shape="circle"
       position1={[-12, 0, 0]}
       sound="dobra1.wav"></Pano>
    </>
 )

}