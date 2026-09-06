import BookingServicesClient from './BookingServicesClient'

export const metadata = {
	title: 'Book a Discovery Call | Angelo Consulta',
	description: 'Book a discovery call with Angelo Consulta.',
	alternates: {
		canonical: 'https://angeloconsulta-portfolio.vercel.app/booking-services',
	},
}

export default function BookingServicesPage() {
	return <BookingServicesClient />
}
