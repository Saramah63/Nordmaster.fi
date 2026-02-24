import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <div className="text-sm font-semibold text-amber-600 tracking-wider uppercase mb-4">
              {t('contact.label')}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              {t('contact.description')}
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              <a 
                href="tel:+358XXXXXXXX" 
                className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">{t('contact.phone.title')}</div>
                  <div className="text-slate-600">+358 XX XXX XXXX</div>
                  <div className="text-sm text-amber-600 mt-1">{t('contact.phone.hours')}</div>
                </div>
              </a>

              <a 
                href="mailto:info@nordmaster.fi" 
                className="flex items-start gap-4 p-6 bg-white rounded-xl hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">{t('contact.email.title')}</div>
                  <div className="text-slate-600">info@nordmaster.fi</div>
                  <div className="text-sm text-amber-600 mt-1">{t('contact.email.response')}</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">{t('contact.location.title')}</div>
                  <div className="text-slate-600">{t('contact.location.area')}</div>
                  <div className="text-sm text-slate-500 mt-1">{t('contact.location.desc')}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">{t('contact.hours.title')}</div>
                  <div className="text-slate-600">{t('contact.hours.days')}</div>
                  <div className="text-sm text-slate-500 mt-1">{t('contact.hours.time')}</div>
                </div>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">{t('contact.company.title')}</h3>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>{t('contact.company.name')}</span>
                  <span className="font-semibold text-white">Nordmaster Group Oy</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.company.id')}</span>
                  <span className="font-semibold text-white">3526474-3</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.company.type')}</span>
                  <span className="font-semibold text-white">{t('contact.company.type.value')}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.company.industry')}</span>
                  <span className="font-semibold text-white">{t('contact.company.industry.value')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              {t('contact.form.title')}
            </h3>
            <p className="text-slate-600 mb-8">
              {t('contact.form.subtitle')}
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  {t('contact.form.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                  placeholder={t('contact.form.name.placeholder')}
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    {t('contact.form.phone')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                    placeholder={t('contact.form.phone.placeholder')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
                    placeholder={t('contact.form.email.placeholder')}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-900 mb-2">
                  {t('contact.form.service')} *
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors"
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
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-900 focus:outline-none transition-colors resize-none"
                  placeholder={t('contact.form.message.placeholder')}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-4 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl font-semibold text-lg group"
              >
                {t('contact.form.submit')}
                <Send className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <p className="text-sm text-slate-500 text-center">
                {t('contact.form.note')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
