import { env } from 'cloudflare:workers';
import { getChatGPTUser } from './chatgpt-auth';
export type Test = {id:string;course:string;title:string;unit:string;filename:string;size:number;created:string};
export function database(){if(!env.DB) throw new Error('Database unavailable'); return env.DB;}
export function bucket(){if(!env.BUCKET) throw new Error('File storage unavailable');return env.BUCKET;}
export async function isOwner(){const u=await getChatGPTUser();return !!u && u.email.toLowerCase()===String(env.OWNER_EMAIL || '').toLowerCase();}
export async function listTests():Promise<Test[]>{const r=await database().prepare('SELECT * FROM tests ORDER BY created DESC').all<Test>(); return r.results;}
