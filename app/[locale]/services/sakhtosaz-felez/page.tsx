import { redirect } from 'next/navigation';

export default function SakhtosazLocaleRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/services/metal-construction`);
}
