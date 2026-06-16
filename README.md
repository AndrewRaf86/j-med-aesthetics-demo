# J Med Aesthetics Demo

Premium static demo site prepared by Lima Systems Lab for J Med Aesthetics, a medical spa in Hamburg, NY.

This is a prospecting/demo page. It is not the official website unless approved by the business.

## Files

- `index.html`: content, SEO, Open Graph, Twitter/X tags, MedicalBusiness schema, FAQ schema.
- `styles.css`: mobile-first visual system, responsive layout, cards, motion, and accessibility states.
- `script.js`: fade-up reveal, FAQ accordion behavior, and sticky call CTA.
- `robots.txt`: crawler rules.
- `sitemap.xml`: sitemap for the Vercel demo URL.
- `vercel.json`: static deployment headers.

## Business Info Used

- Name: J Med Aesthetics.
- Category: Medical spa.
- Address: 11 E Union St, Hamburg, NY 14075, United States.
- Phone: +1 716-903-8816.
- Google rating: 4.9.
- Google reviews: 39.
- Instagram: https://www.instagram.com/j_med_aesthetics/?hl=en
- Google Maps: https://www.google.com/maps/search/?api=1&query=J%20Med%20Aesthetics%2011%20E%20Union%20St%20Hamburg%20NY%2014075

## How To Update

- Update phone links by replacing `tel:+17169038816`.
- Update Google Maps links if the business provides a preferred profile URL.
- Update Instagram link if a cleaner URL is preferred.
- Update title, meta description, canonical URL, Open Graph URL, `robots.txt`, and `sitemap.xml` if the final domain changes.
- Replace abstract CSS visual cards with real approved clinic photos only if the business supplies them.

## Image Guidance

No fake clinic imagery is used. If replacing with real images:

- Use approved photos from the business.
- Do not imply before/after results unless properly authorized and compliant.
- Avoid awkward face cropping.
- Compress images for web.
- Add descriptive English alt text.
- Use lazy loading for below-fold images.

## Medical Copy Guidance

The page avoids prices, guarantees, credentials, certifications, exact hours, treatment promises, and fake testimonials. Service copy uses cautious language and directs visitors to discuss suitability with the provider.

## Deploy

This is a static site and does not require a build step.

```bash
vercel deploy --prod
```
