import { redirect } from 'next/navigation';

export default function KhamkariLocaleRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/services/bending`);
}
