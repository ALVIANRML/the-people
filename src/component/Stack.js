import { Container } from "react-bootstrap";
import '../css/Stack.css'
import Stack from 'react-bootstrap/Stack';
import {January, April, February, March, May, June, July, August, September, October, November, December} from "./figure";


function MyStack(){
    return(
        <div className="stack-container" fluid>
    <Stack direction="vertical" gap={10}>
        <Stack direction="horizontal" gap={10}>
      <div className="p-0"><January/></div>
      <div className="p-0"><February/></div>
      <div className="p-0"><March/></div>
      <div className="p-0"><April/></div>
        </Stack>
        <Stack direction="horizontal" gap={10}>
      <div className="p-0"><May/></div>
      <div className="p-0"><June/></div>
      <div className="p-0"><July/></div>
      <div className="p-0"><August/></div>
    </Stack>
        <Stack direction="horizontal" gap={10}>
      <div className="p-0"><September/></div>
      <div className="p-0"><October/></div>
      <div className="p-0"><November/></div>
      <div className="p-0"><December/></div>
    </Stack>
    </Stack>
      </div>
      
    );
}

export default MyStack