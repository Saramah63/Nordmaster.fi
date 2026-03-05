import { redirect } from 'next/navigation';

export default function JushkariLocaleRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/services/welding`);
}
