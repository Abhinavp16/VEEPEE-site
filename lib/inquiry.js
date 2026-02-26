export const WHATSAPP_NUMBER = '917828832346';

export function buildWhatsAppMessage({ name, phone, productName, price = '', details = [] }) {
    const lines = [
        'Hello Veepee Impex,',
        `My Name: ${name}`,
        `My Number: ${phone}`,
        '',
        `I want to inquire about: ${productName}`,
    ];

    if (price) {
        lines.push(`Price shown: ${price}`);
    }

    if (details.length) {
        lines.push('', 'Product details:');
        details.forEach((detail) => lines.push(`- ${detail}`));
    }

    return lines.join('\n');
}
