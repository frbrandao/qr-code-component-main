
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import QRCode from 'qrcode'
import { Container, CardOut, Frame1, Frame2, Msg1, Msg2, opts} from './styles'

function QR () {
    const [text] = useState("");
    const canvasRef = useRef();

    useEffect(() => {
        QRCode.toCanvas(
          canvasRef.current,
          text || "https://www.frontendmentor.io/home",
          opts,
          (error) => error && console.error(error)
        );
      }, [text]);

    return(
        <Container>
            <Frame1>
                <Frame2 align= "center">
                    <CardOut align= "center">
                        <canvas  ref={canvasRef}/> 
                    </CardOut>
                </Frame2>
                <Frame2>
                    <Msg1 variant="body1" fontWeight={'bold'} align="center">
                        Improve your frontend skills by building projects
                    </Msg1>
                </Frame2>
                <Frame2 paddingTop={1}>
                    <Msg2 variant="body1" align="center">
                        Scan the QR Code to visit Frontend Mentor and take your 
                        skills to the next level
                    </Msg2>
                </Frame2>
            </Frame1>        
        </Container>
 
    )
}

export default QR