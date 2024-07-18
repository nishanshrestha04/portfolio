//@ts-ignore
import NET from 'vanta/src/vanta.net'

import { Info } from "../Info";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { useEffect, useState } from "react";



const About = () => {
    const [opened, { open, close }] = useDisclosure(false)
    const btn = useMatches({
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg'
    })
    const [nets, setNets] = useState<any>(null)
    useEffect(() => {
        if (!nets) {
            setNets(NET({
                el: "#bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                points: 10.00,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x8892B0,
                backgroundColor: 0x0A192F,
                maxDistance: 20,
                size: 2,
                spacing: 15
            }))
        }
        return () => {
            if (nets) nets.destroy()
        }
    }, []); // <-- Close the dependency array properly
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="800" className=" flex relative overflow-hidden justify-around items-center font-mono px-10 py-10 sm-mx:px-4 xs-mx:px-2 xs-mx:py-4 h-screen  xl-mx:h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-6" id="bg">
                <div className="bs:ml-10 bs:w-3/5 mt-20 bs-mx:mt-0 flex flex-col lg-mx:gap-3  bs-mx:items-center">
                    <div className="text-primaryColor text-3xl lg-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">Hi, I am</div>
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-3xl xsm-mx:text-[27px]">{Info.name}</div>
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-lg">I'm a&nbsp;<span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>
                    <div className="text-textColor text-xl w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-sm xs-mx:text-xs">{Info.bio}</div>
                    <div className="xs-mx:w-[90%] flex gap-3 xs-mx:justify-between">
                        <Button onClick={open} className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-[46%]" size={btn} variant="filled" color="#64FFDA">Check Resume</Button>
                        <Button component="a" href="Nishan Shrestha.pdf" download={Info.name} className="focus-visible:!outline-none !text-primaryColor !w-fit xs-mx:!w-[46%]" size={btn} variant="outline" color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                    </div>
                </div>
                <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit">
                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 bs-mx:mt-24 items-center justify-center text-center">
                        <img className="w-full  h-full rounded-full " src="nishan.jpg" alt="profile" />
                    </NeonGradientCard>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
export default About;