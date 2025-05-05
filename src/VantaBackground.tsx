import { useEffect, useRef, useState } from 'react'

export default function VantaBackground() {
    const ref = useRef(null)
    const [vantaEffect, setVantaEffect] = useState<any>(null)
    
    useEffect(() => {
      if (!vantaEffect && window.VANTA && window.VANTA.FOG) {
        setVantaEffect(
          window.VANTA.FOG({
            el: ref.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            highlightColor: 0xff00a5,
            midtoneColor: 0xffa4ff,
            lowlightColor: 0x2d00ff,
            baseColor: 0xffebeb,
            blurFactor: 0.6,
            speed: 1,
            zoom: 1
          })
        )
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])
    

  return <div ref={ref} className="absolute top-0 left-0 w-full h-full -z-10" />
}
