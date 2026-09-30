import Library from './ui';
import { listTests,Test } from './library';
export const dynamic='force-dynamic';
export default async function Home(){let tests:Test[]=[];let unavailable=false;try{tests=await listTests();}catch(e){console.error(e);unavailable=true;}return <Library tests={tests} unavailable={unavailable}/>;}
