import { Card, Grid, Typography, styled } from '@mui/material'
 
export const opts = {
  errorCorrectionLevel: 'H',
  type: 'image/jpeg',
  quality: 0.3,
  margin: 1,
  color: {
    dark:"#F0F0F0",
    light:"##F4F9FB"
  }
}

export const Container = styled(Card)`
  ${({ theme }) => `
   margin: ${theme.spacing(2)};
   margin-top: ${theme.spacing(2)};
   padding-left: ${theme.spacing(2)};
   padding-right: ${theme.spacing(2)};
   padding-top: ${theme.spacing(2)};
   padding-bottom: ${theme.spacing(2)};
`}
display: flex;
justify-content: center;
align-items: center;
min-height: 550px;
width: 1250px;
position: relative;
borderRadius: 10;
background-color: hsl(212, 45%, 89%);
`

export const CardOut = styled(Card)`
  ${({ theme }) => `
    margin: ${theme.spacing(2)};
    margin-top: ${theme.spacing(1)};
    padding-left: ${theme.spacing(2)};
    padding-right: ${theme.spacing(3)};
    padding-top: ${theme.spacing(8)};
    padding-bottom: ${theme.spacing(1)};
  `}
  align: "center";
  height: 225px;
  width: 225px;
  border-radius: 5px;
  background-color: hsl(212, 100%, 50%)

`

export const Frame1 = styled(Grid)`
  height: 450px;
  width: 300px;
  border-radius: 5px;
  background-color: hsl(0, 0%, 100%);
`

export const Frame2 = styled(Grid)`
 border-radius: 10;
`

export const Msg1 = styled(Typography)`
 ${({ theme }) => `
  padding-left: ${theme.spacing(0)};
`}
  align: right;
  font-size: 17px;
  color: hsl(218, 44%, 22%)

`
export const Msg2 = styled(Typography)`
  ${({ theme }) => `
    padding-left: ${theme.spacing(0)};
  `}
  align: justify;
  font-size: 12px;
  color: hsl(218, 44%, 22%)

`
