import type { APIRoute } from 'astro';
import { site } from '../data/site';

/** Escapa caracteres especiais de valores vCard (RFC 6350). */
const esc = (v: string) => v.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/([,;])/g, '\\$1');

const { address } = site;
const phone = `+${site.whatsapp.replace(/\D/g, '')}`;

const lines = [
	'BEGIN:VCARD',
	'VERSION:3.0',
	`N:;;;;`,
	`FN:${esc(site.name)}`,
	`ORG:${esc(site.name)}`,
	'X-ABShowAs:COMPANY',
	`TEL;TYPE=CELL,VOICE:${phone}`,
	`EMAIL;TYPE=INTERNET,WORK:${site.email}`,
	`ADR;TYPE=WORK:;${esc(address.building)};${esc(`${address.street}, ${address.district}`)};${esc(address.city)};${esc(address.state)};${esc(address.zip)};Brasil`,
	`URL:${site.url}`,
	`X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/${site.instagram}`,
	`NOTE:${esc(`Horário de atendimento: ${site.hours}`)}`,
	'END:VCARD',
];

export const GET: APIRoute = () =>
	new Response(lines.join('\r\n') + '\r\n', {
		headers: {
			'Content-Type': 'text/vcard; charset=utf-8',
			'Content-Disposition': 'attachment; filename="agnoletto-contabilidade.vcf"',
		},
	});
