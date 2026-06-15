export default function FullWidthMap() {
  return (
    <section className="w-full h-[400px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48379.09193813253!2d-73.9245912!3d40.931211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f3e0f7b8a3b7%3A0x2c8a5f7e3d4b2a1f!2sYonkers%2C%20NY%2010704!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rama Fly Construction Service Area Map - Yonkers NY"
      ></iframe>
    </section>
  );
}