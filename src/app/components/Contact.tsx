import { Phone, Mail, MapPin, Clock, Send, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-[#f7f6f2]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
              {t('contact.label')}
            </div>
            <h2 className="text-4xl md:text-6xl text-slate-900 mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {t('contact.description')}
            </p>

            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{t('contact.phone.title')}</div>
                    <a href="tel:+358XXXXXXXX" className="text-lg text-slate-900 font-semibold block">+358 XX XXX XXXX</a>
                    <div className="text-sm text-slate-500">{t('contact.phone.hours')}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">{t('contact.email.title')}</div>
                    <a href="mailto:info@nordmaster.fi" className="text-lg text-slate-900 font-semibold block">info@nordmaster.fi</a>
                    <div className="text-sm text-slate-500">{t('contact.email.response')}</div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{t('contact.location.title')}</div>
                      <div className="text-sm text-slate-700">{t('contact.location.area')}</div>
                      <div className="text-xs text-slate-500">{t('contact.location.desc')}</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Clock size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">{t('contact.hours.title')}</div>
                      <div className="text-sm text-slate-700">{t('contact.hours.days')}</div>
                      <div className="text-xs text-slate-500">{t('contact.hours.time')}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg">{t('contact.company.title')}</h3>
                  <ArrowUpRight size={18} />
                </div>
                <div className="text-sm text-slate-300 space-y-1">
                  <div>{t('contact.company.name')} Nordmaster Group Oy</div>
                  <div>{t('contact.company.id')} 3526474-3</div>
                  <div>{t('contact.company.type')} {t('contact.company.type.value')}</div>
                  <div>{t('contact.company.industry')} {t('contact.company.industry.value')}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-[0.4em] text-slate-500">{t('contact.form.title')}</div>
                <h3 className="text-2xl text-slate-900 mt-2">{t('contact.form.subtitle')}</h3>
              </div>
              <Send size={20} className="text-slate-400" />
            </div>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  placeholder={t('contact.form.name.placeholder')}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder={t('contact.form.phone.placeholder')}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                    placeholder={t('contact.form.email.placeholder')}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
                  {t('contact.form.service')}
                </label>
                <select
                  id="service"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  required
                >
                  <option value="">{t('contact.form.service.select')}</option>
                  <option value="newbuild">{t('contact.form.service.newbuild')}</option>
                  <option value="renovation">{t('contact.form.service.renovation')}</option>
                  <option value="maintenance">{t('contact.form.service.maintenance')}</option>
                  <option value="carpentry">{t('contact.form.service.carpentry')}</option>
                  <option value="other">{t('contact.form.service.other')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-200 resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-slate-900 text-white py-4 text-sm font-medium hover:bg-slate-800 transition-colors"
              >
                {t('contact.form.submit')}
              </button>

              <p className="text-xs text-slate-500 text-center">{t('contact.form.note')}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
