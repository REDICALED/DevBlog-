import Bc_sit from '@/assets/bc_sit.jpg'
import SlideupTextLoop from "@/components/main/SlideupTextLoop";
import SlideupText from "@/components/main/SlideupText";

export default function Slide_1() {
    return (
        <div className='lg:flex w-full h-[45vh] lg:h-[60vh]  '>
                <div className='lg:w-1/3 w-full '>
                    <div className='grid place-items-center'>
                      <img
                        key={0}
                        src={Bc_sit.src}
                        alt="Image"
                        className=" grid place-items-center object-contain h-[25vh] lg:h-[60vh] rounded-md animate__slide-in-top  "
                      />
                    </div>
                </div>

                <div className=" font-semibold lg:w-2/3 lg:text-[7.5vh] text-[3vh] leading-none mt-2 lg:mt-0  ">
                
                <div className=" lg:text-[7.5vh] lg:h-[8.5vh] text-[2vh] h-[2.5vh] overflow-hidden">
                <SlideupText text={"ByeongChan Kim"}></SlideupText>
                </div>

                <p className=" font-medium lg:text-[3.5vh] lg:h-[4.5vh] text-[1.5vh] h-[2.5vh] mt-3 lg:mt-20 overflow-hidden">
                <SlideupText text={"Savoring all things Web/CS"}></SlideupText>
                </p>

                <div className='overflow-hidden font-medium lg:text-[2.5vh] lg:h-[3.5vh] text-[1.0vh] h-[2.0vh] mt-3 lg:mt-20 p-2'>
                <SlideupTextLoop 
                text={["Programmer 🖥️" ,"@Kobe_the_Wag 🐕" ,"Web - Art 🌐", " Diary, Travel Log, Thoughts, etc ... 🌍" ]}
                />
                </div>
                
                </div>

              </div>
    )
}