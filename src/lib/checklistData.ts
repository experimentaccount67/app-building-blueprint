export type Tag = 'must' | 'rec' | 'opt'

export interface ChecklistItem {
  name: string
  desc: string
  tag: Tag
  tools?: string // e.g. "Supabase", "Stripe + Resend"
}

export interface ChecklistGroup {
  label: string
  items: ChecklistItem[]
}

export interface ChecklistSection {
  id: string
  icon: string
  color: string
  title: string
  sub: string
  groups: ChecklistGroup[]
}

export const sections: ChecklistSection[] = [
  {
    id: 'interface',
    icon: '🖥',
    color: 'purple',
    title: 'Your App\'s Interface',
    sub: 'What users see — first impressions cost you customers',
    groups: [
      {
        label: 'The Basics',
        items: [
          {
            name: 'It works on mobile',
            desc: 'Open your app on a real phone and click through every page. Most of your users will be on mobile. If it looks broken there, they\'re gone.',
            tag: 'must',
          },
          {
            name: 'Loading states — no blank screens',
            desc: 'Whenever your app is fetching data, show a spinner or skeleton. A blank white screen makes users think it\'s broken. They\'ll leave.',
            tag: 'must',
          },
          {
            name: 'Error messages that make sense',
            desc: 'If something goes wrong, show a human message like "Couldn\'t save — please try again" instead of a blank screen or a code error. Never show technical error codes to users.',
            tag: 'must',
          },
          {
            name: 'Empty states designed',
            desc: 'What does a new user see before they\'ve added any data? A blank page is confusing. Add a short message and a call to action like "You don\'t have any projects yet → Create your first one".',
            tag: 'rec',
          },
          {
            name: 'Success & error pop-up messages (toasts)',
            desc: 'When a user saves something, deletes something, or hits an error — show a small popup message that confirms it. "Saved!" or "Something went wrong, try again." It makes the app feel alive.',
            tag: 'rec',
          },
        ],
      },
      {
        label: 'Look & Feel',
        items: [
          {
            name: 'Consistent branding everywhere',
            desc: 'Same colors, same fonts, same logo across every page. Inconsistency makes it look unfinished and cheap. Check every screen.',
            tag: 'must',
          },
          {
            name: 'Favicon set',
            desc: 'That tiny icon in the browser tab. If it\'s still the default Vercel or React icon, it looks unfinished. Use your logo.',
            tag: 'must',
          },
          {
            name: 'A real 404 page',
            desc: 'When users land on a broken link, show a friendly "Page not found" message with a button back to home. The default error page is ugly and confusing.',
            tag: 'must',
          },
          {
            name: 'All links and buttons actually work',
            desc: 'Click every single button, link, and form in your app before launching. Broken buttons destroy trust instantly.',
            tag: 'must',
          },
          {
            name: 'Images load fast',
            desc: 'Large images slow your app down massively. Use WebP format, keep images under 200KB where possible, and let your hosting (Vercel/Netlify) serve them from a CDN automatically.',
            tag: 'rec',
            tools: 'Vercel / Cloudflare',
          },
          {
            name: 'Alt text on images',
            desc: 'Every image in your app should have a short description in the alt attribute. It helps screen readers, improves SEO, and shows something useful when images fail to load. Takes 30 seconds per image.',
            tag: 'rec',
          },
        ],
      },
    ],
  },
  {
    id: 'backend',
    icon: '⚙️',
    color: 'cyan',
    title: 'How Your App Works',
    sub: 'The logic running behind the scenes',
    groups: [
      {
        label: 'The Essentials',
        items: [
          {
            name: 'API keys and secrets are NOT in your code',
            desc: 'If your Stripe key, Supabase key, or any password is written directly in your code file — anyone who sees your code can steal them. Put all secrets in environment variables (.env file) and never commit that file to GitHub.',
            tag: 'must',
            tools: 'Vercel env vars / .env file',
          },
          {
            name: 'Environment variables set in production',
            desc: 'Your secrets live in your local .env file, but you also need to add them to your hosting platform (Vercel, Netlify, Railway). Check this before launching — apps break silently when env vars are missing.',
            tag: 'must',
            tools: 'Vercel / Netlify dashboard',
          },
          {
            name: 'Email sending works',
            desc: 'Your app needs to send emails — welcome messages, password resets, payment receipts. Don\'t use Gmail directly. Use a proper email service so emails actually arrive and don\'t land in spam.',
            tag: 'must',
            tools: 'Resend (free tier) / Postmark',
          },
          {
            name: 'Form submissions are validated',
            desc: 'Never trust what a user types into a form. Validate that emails look like emails, required fields aren\'t empty, and numbers are actually numbers — both in the app and before saving to your database.',
            tag: 'must',
          },
          {
            name: 'File uploads go to cloud storage, not your server',
            desc: 'If users can upload images or files, store them in Supabase Storage, Cloudflare R2, or AWS S3 — not on your server. Servers aren\'t made for storing files and you\'ll run out of space.',
            tag: 'rec',
            tools: 'Supabase Storage / Cloudflare R2',
          },
        ],
      },
      {
        label: 'Reliability',
        items: [
          {
            name: 'Your app handles errors without crashing',
            desc: 'Wrap your code in try/catch blocks. If one thing fails (like an external API being down), your whole app shouldn\'t crash. Show a nice error message instead.',
            tag: 'must',
          },
          {
            name: 'Slow or heavy operations don\'t freeze the app',
            desc: 'If something takes a few seconds (AI generation, image processing, sending emails), run it in the background and tell the user "We\'re working on it." Never make them stare at a frozen screen.',
            tag: 'rec',
          },
        ],
      },
    ],
  },
  {
    id: 'database',
    icon: '🗄',
    color: 'green',
    title: 'Your Database',
    sub: 'Where all your users\' data lives — don\'t mess this up',
    groups: [
      {
        label: 'Security (Critical)',
        items: [
          {
            name: 'Row Level Security (RLS) is turned ON in Supabase',
            desc: 'This is the most important Supabase setting. Without it, any user can read or edit ANYONE\'S data. Go to Supabase → your table → Auth Policies → make sure RLS is enabled on every table.',
            tag: 'must',
            tools: 'Supabase dashboard',
          },
          {
            name: 'Users can only see their own data',
            desc: 'With RLS on, write a policy that says "users can only read rows where user_id matches their own ID." Without this policy, even with RLS on, all queries return nothing (or everything, depending on settings).',
            tag: 'must',
            tools: 'Supabase → Table Editor → Policies',
          },
          {
            name: 'Your Supabase service key is never in the browser',
            desc: 'The service_role key bypasses all security. It should ONLY be used on the server (backend), never in frontend code that runs in the browser. Use the anon key for client-side code.',
            tag: 'must',
            tools: 'Supabase',
          },
        ],
      },
      {
        label: 'Data Safety',
        items: [
          {
            name: 'Automatic backups are enabled',
            desc: 'Supabase backs up your database automatically on paid plans. On free plan, export your data manually once a week. One database corruption incident without a backup = you lose everything.',
            tag: 'must',
            tools: 'Supabase → Settings → Backups',
          },
          {
            name: 'Don\'t hard-delete important data',
            desc: 'Instead of fully deleting user records, add a "deleted_at" column and just mark them as deleted. This lets you recover data if a user accidentally deletes something important.',
            tag: 'rec',
          },
          {
            name: 'Test that your backup can actually be restored',
            desc: 'A backup that can\'t be restored is useless. Download your backup and try restoring it to a test database at least once. Most people skip this and regret it.',
            tag: 'rec',
          },
        ],
      },
      {
        label: 'Performance',
        items: [
          {
            name: 'Your app doesn\'t make hundreds of database calls per page',
            desc: 'If loading one page fires 50+ separate database queries, it\'ll be slow and expensive. Try to fetch related data together in one query instead of one at a time.',
            tag: 'rec',
          },
          {
            name: 'Add indexes on columns you search/filter by',
            desc: 'If you frequently search users by email or filter orders by status, add an index on those columns in Supabase. It\'s like a search index — makes queries dramatically faster at scale.',
            tag: 'opt',
            tools: 'Supabase → Table Editor → Indexes',
          },
        ],
      },
    ],
  },
  {
    id: 'auth',
    icon: '🔐',
    color: 'amber',
    title: 'Login & User Accounts',
    sub: 'Who gets in, what they can do, and keeping it secure',
    groups: [
      {
        label: 'Core Auth Flows',
        items: [
          {
            name: 'Don\'t build auth yourself — use a trusted tool',
            desc: 'Auth is one of the most dangerous things to build from scratch. Use Supabase Auth, Clerk, or Auth0. They handle password hashing, session management, and security for you.',
            tag: 'must',
            tools: 'Supabase Auth / Clerk',
          },
          {
            name: 'Sign up, sign in, and sign out all work',
            desc: 'Test every auth flow yourself: create a new account, log out, log back in, reset your password. These are your most critical flows — if any of them break, users can\'t use your app at all.',
            tag: 'must',
          },
          {
            name: 'Password reset flow works end-to-end',
            desc: 'Click "forgot password," check that the email arrives, click the reset link, and set a new password. Test this before launching. It\'s the #1 support request if broken.',
            tag: 'must',
            tools: 'Supabase Auth / Clerk',
          },
          {
            name: 'Email verification is turned on',
            desc: 'Require users to verify their email before they can fully use the app. This prevents fake accounts and ensures you can reach your users. Enable it in Supabase Auth settings.',
            tag: 'rec',
            tools: 'Supabase → Auth → Email',
          },
          {
            name: 'Google / GitHub login (OAuth)',
            desc: 'Adding "Sign in with Google" massively reduces signup friction — users don\'t have to create a password. Supabase and Clerk make this a 10-minute setup.',
            tag: 'rec',
            tools: 'Supabase → Auth → Providers',
          },
        ],
      },
      {
        label: 'Permissions',
        items: [
          {
            name: 'Protected pages redirect unauthenticated users',
            desc: 'If a logged-out user tries to visit /dashboard, they should be redirected to /login — not see an error or, worse, the actual dashboard with no data.',
            tag: 'must',
          },
          {
            name: 'Admins and regular users have different access',
            desc: 'If your app has admin features (user management, analytics, etc.), make sure only admins can reach those pages. Check both the UI AND the database — locking a page in the UI isn\'t enough.',
            tag: 'rec',
          },
        ],
      },
    ],
  },
  {
    id: 'payments',
    icon: '💳',
    color: 'red',
    title: 'Taking Payments',
    sub: 'Getting paid without breaking trust or the law',
    groups: [
      {
        label: 'Setup',
        items: [
          {
            name: 'Use Stripe — don\'t try to build your own payment system',
            desc: 'Stripe is the industry standard. It handles security, fraud, receipts, and compliance. Paddle is a good alternative if you\'re selling globally and want taxes handled for you.',
            tag: 'must',
            tools: 'Stripe / Paddle',
          },
          {
            name: 'Test mode payments work before going live',
            desc: 'Stripe has a test mode where you can simulate purchases with fake card numbers (4242 4242 4242 4242). Test the entire payment flow before switching to live mode. Never charge real cards while testing.',
            tag: 'must',
            tools: 'Stripe dashboard → Test mode',
          },
          {
            name: 'Live mode is properly set up before launch',
            desc: 'Switch Stripe from test mode to live mode, set up your bank account for payouts, and complete Stripe\'s identity verification. This takes 1-3 days, don\'t leave it for launch day.',
            tag: 'must',
            tools: 'Stripe dashboard',
          },
        ],
      },
      {
        label: 'The Payment Flow',
        items: [
          {
            name: 'Success page shown after purchase',
            desc: 'After a successful payment, send users to a clear "You\'re in! Here\'s what to do next" page. Don\'t just redirect them back to the homepage with no confirmation.',
            tag: 'must',
          },
          {
            name: 'Payment receipt email is sent automatically',
            desc: 'Every paying customer should automatically receive an email receipt. Stripe can send these for you — turn it on in Stripe → Settings → Customer emails.',
            tag: 'must',
            tools: 'Stripe → Settings → Customer emails',
          },
          {
            name: 'Failed payments are handled gracefully',
            desc: 'When a payment fails (expired card, insufficient funds), show a clear message and let the user try again. For subscriptions, send an email so they can update their card before losing access.',
            tag: 'must',
          },
          {
            name: 'Stripe webhooks are set up',
            desc: 'Webhooks are how Stripe tells your app "this payment succeeded" or "this subscription was cancelled." Without them, your app won\'t know when someone actually paid. Critical for subscriptions.',
            tag: 'must',
            tools: 'Stripe → Developers → Webhooks',
          },
          {
            name: 'Refund process defined',
            desc: 'Know how to issue a refund before you need to. You can do it in the Stripe dashboard in 30 seconds. Also decide your refund policy before launching and put it on your site.',
            tag: 'rec',
            tools: 'Stripe dashboard',
          },
        ],
      },
      {
        label: 'Subscriptions (if applicable)',
        items: [
          {
            name: 'Subscribe, upgrade, downgrade, and cancel all work',
            desc: 'Test every subscription action yourself. Cancelling especially — if users can\'t easily cancel, they\'ll dispute the charge and you\'ll get hit with a chargeback.',
            tag: 'must',
          },
          {
            name: 'Customer portal set up',
            desc: 'Stripe\'s hosted customer portal lets users manage their own subscription (upgrade, cancel, download invoices) without you building anything. Enable it in Stripe settings — it\'s free.',
            tag: 'rec',
            tools: 'Stripe → Settings → Customer portal',
          },
          {
            name: 'Free trial defined and tested',
            desc: 'If you offer a trial, be crystal clear about when they\'ll be charged and send a reminder email 3 days before. Surprise charges = chargebacks = Stripe closing your account.',
            tag: 'rec',
          },
        ],
      },
    ],
  },
  {
    id: 'security',
    icon: '🛡',
    color: 'indigo',
    title: 'Keeping It Safe',
    sub: 'Protecting your users and your reputation',
    groups: [
      {
        label: 'The Non-Negotiables',
        items: [
          {
            name: 'HTTPS is on (your site starts with https://)',
            desc: 'All data between your app and users is encrypted. Vercel and Netlify turn this on automatically with a free SSL certificate. If your URL starts with http:// (no S), fix it immediately.',
            tag: 'must',
            tools: 'Vercel / Netlify (automatic)',
          },
          {
            name: 'No secret keys exposed in your GitHub repo',
            desc: 'Search your public GitHub repo for words like "secret", "key", "password", "token". If you find any real values there, rotate those keys immediately — anyone can find them.',
            tag: 'must',
          },
          {
            name: 'Login has brute-force protection',
            desc: 'If someone tries wrong passwords 100 times, they shouldn\'t be able to keep trying indefinitely. Supabase Auth and Clerk both handle this automatically.',
            tag: 'must',
            tools: 'Supabase Auth / Clerk (built-in)',
          },
          {
            name: 'Users can\'t access each other\'s data',
            desc: 'Test this yourself: log in as user A, copy the URL of a resource, then log in as user B and paste that URL. You should see an error, not user A\'s data. This is fixed by Row Level Security in Supabase.',
            tag: 'must',
            tools: 'Supabase RLS',
          },
        ],
      },
      {
        label: 'Good to Have',
        items: [
          {
            name: 'CAPTCHA on login and signup forms',
            desc: 'Prevents bots from creating thousands of fake accounts or brute-forcing passwords. Cloudflare Turnstile is free and takes 20 minutes to add.',
            tag: 'rec',
            tools: 'Cloudflare Turnstile (free)',
          },
          {
            name: 'Rate limiting on API endpoints',
            desc: 'Stops someone from sending 10,000 requests per minute to your app (which would crash it or rack up your Supabase bill). Upstash Redis makes this easy to add.',
            tag: 'rec',
            tools: 'Upstash / Vercel rate limiting',
          },
          {
            name: 'Dependencies are up to date',
            desc: 'Run "npm audit" in your terminal. It shows if any packages you\'re using have known security holes. Fix the critical ones before launching.',
            tag: 'opt',
          },
          {
            name: 'Security headers configured',
            desc: 'Add basic HTTP security headers to your app: X-Frame-Options (prevents clickjacking), X-Content-Type-Options, and Referrer-Policy. In Next.js you can set these in next.config.ts in a few lines.',
            tag: 'opt',
            tools: 'next.config.ts headers()',
          },
        ],
      },
    ],
  },
  {
    id: 'monitoring',
    icon: '📡',
    color: 'orange',
    title: 'Knowing When Things Break',
    sub: 'Catching problems before your users report them',
    groups: [
      {
        label: 'Must Set Up Before Launch',
        items: [
          {
            name: 'Error tracking (Sentry)',
            desc: 'Sentry catches every crash and error in your app and sends you an email. Free tier is more than enough to start. Without it, you\'re flying blind — you only find out something broke when users complain.',
            tag: 'must',
            tools: 'Sentry (free tier)',
          },
          {
            name: 'Uptime monitoring',
            desc: 'Get an alert the moment your site goes down, before your users notice. UptimeRobot is free and checks every 5 minutes. Takes 5 minutes to set up.',
            tag: 'must',
            tools: 'UptimeRobot (free)',
          },
          {
            name: 'Analytics — know who\'s using your app',
            desc: 'Without analytics, you\'re guessing. Set up Plausible (privacy-friendly, paid) or PostHog (free tier) to see how many people visit, which pages they use, and where they drop off.',
            tag: 'must',
            tools: 'Plausible / PostHog / Vercel Analytics',
          },
        ],
      },
      {
        label: 'Nice to Add Later',
        items: [
          {
            name: 'Performance monitoring',
            desc: 'Are certain pages loading slowly? Vercel Analytics shows you page load times in production. Slow pages lose users — Google found a 1-second delay reduces conversions by 7%.',
            tag: 'rec',
            tools: 'Vercel Analytics / PostHog',
          },
          {
            name: 'Set up alerts for spikes',
            desc: 'Get notified if your error rate suddenly jumps or your Supabase database usage spikes. Sentry and most monitoring tools let you set threshold alerts.',
            tag: 'opt',
          },
        ],
      },
    ],
  },
  {
    id: 'legal',
    icon: '📋',
    color: 'pink',
    title: 'Legal & Compliance',
    sub: 'The stuff that can get you in real trouble if you skip it',
    groups: [
      {
        label: 'Required Before Taking Money',
        items: [
          {
            name: 'Privacy Policy page exists',
            desc: 'Legally required in most countries if you collect any user data (even just an email address). Use a generator like Termly or Iubenda to create one in minutes. Link it in your footer and signup page.',
            tag: 'must',
            tools: 'Termly / Iubenda (generators)',
          },
          {
            name: 'Terms of Service page exists',
            desc: 'Protects you if a user tries to abuse your app or sue you. Explains the rules of using your app. Again, use a generator — don\'t try to write this yourself.',
            tag: 'must',
            tools: 'Termly / Iubenda (generators)',
          },
          {
            name: 'Refund policy is clearly stated',
            desc: 'Before charging anyone, clearly state your refund policy on your pricing page, checkout page, and ToS. Ambiguous refund policies = chargebacks = Stripe account risk.',
            tag: 'must',
          },
          {
            name: 'Cookie consent banner (for EU users)',
            desc: 'If any of your users are in Europe, you need a cookie consent banner if you use analytics or tracking. Cookieyes and Iubenda have free options. Ignoring this can result in large fines.',
            tag: 'rec',
            tools: 'Cookieyes / Iubenda (free tier)',
          },
        ],
      },
      {
        label: 'Good Practices',
        items: [
          {
            name: 'You own the domain and accounts',
            desc: 'Your domain, hosting, Stripe, and Supabase accounts should be registered to your email — not a freelancer\'s or someone else\'s. Losing access to these means losing your business.',
            tag: 'must',
          },
          {
            name: 'GDPR basics if you have European users',
            desc: 'The big ones: let users download their data, let users delete their account and data, and don\'t share user data with third parties without telling them in your privacy policy.',
            tag: 'rec',
          },
          {
            name: 'Unsubscribe link in all marketing emails',
            desc: 'If you send newsletters or promotional emails, you legally must include an unsubscribe link. Resend and SendGrid handle this automatically.',
            tag: 'must',
            tools: 'Resend / SendGrid (automatic)',
          },
        ],
      },
    ],
  },
  {
    id: 'seo',
    icon: '🔍',
    color: 'teal',
    title: 'Getting Found Online',
    sub: 'Making sure people can actually discover your app',
    groups: [
      {
        label: 'The Basics (Do Before Launch)',
        items: [
          {
            name: 'Every page has a title and description',
            desc: 'The page title is what appears in Google search results and the browser tab. The description is the text below it. Without these, Google won\'t know what your page is about.',
            tag: 'must',
          },
          {
            name: 'OG image set up (social media preview)',
            desc: 'When someone shares your link on Twitter, LinkedIn, or WhatsApp, an image preview appears. Without an OG image set, it shows a blank or ugly preview — kills click-through rates. Make a 1200×630px image with your logo and tagline.',
            tag: 'must',
          },
          {
            name: 'Your app loads fast',
            desc: 'Google ranks fast sites higher. Check your score at pagespeed.web.dev. Aim for 80+ on mobile. The main culprits are large images and too much JavaScript.',
            tag: 'must',
            tools: 'pagespeed.web.dev (free checker)',
          },
          {
            name: 'Connect Google Search Console',
            desc: 'Free tool from Google that shows which search terms bring people to your site, which pages rank, and any indexing errors. Set it up on day one — it takes a few weeks to gather data.',
            tag: 'rec',
            tools: 'Google Search Console (free)',
          },
        ],
      },
      {
        label: 'Grow Over Time',
        items: [
          {
            name: 'Sitemap submitted to Google',
            desc: 'A sitemap tells Google about all the pages on your site. Vercel and Next.js can auto-generate one. Submit it in Google Search Console so Google indexes your pages faster.',
            tag: 'rec',
          },
          {
            name: 'Your URLs are readable and descriptive',
            desc: 'example.com/blog/how-to-build-saas is much better than example.com/p?id=294 — for both users and Google. Keep URLs short, lowercase, and use dashes between words.',
            tag: 'rec',
          },
          {
            name: 'Blog or content section planned',
            desc: 'Writing articles about problems your target users search for is the most cost-effective way to get organic traffic. Even 5-10 good posts can drive hundreds of visitors a month.',
            tag: 'opt',
          },
        ],
      },
    ],
  },
  {
    id: 'prelaunch',
    icon: '🚀',
    color: 'yellow',
    title: 'Before You Go Live',
    sub: 'The final check — don\'t skip this',
    groups: [
      {
        label: 'Launch Day Checklist',
        items: [
          {
            name: 'Custom domain set up (not the .vercel.app URL)',
            desc: 'yourapp.vercel.app looks unfinished and untrustworthy. Get a real domain (Namecheap, Cloudflare, Google Domains) for ~$10/year and connect it to Vercel in 10 minutes.',
            tag: 'must',
            tools: 'Namecheap / Cloudflare Registrar',
          },
          {
            name: 'Test the full user journey end-to-end',
            desc: 'Sign up as a brand new user. Go through every step a paying customer would take: sign up → verify email → onboarding → core feature → payment → confirmation. Fix anything that feels confusing.',
            tag: 'must',
          },
          {
            name: 'Test payments with a real card',
            desc: 'Run a small real charge ($1) through Stripe live mode before announcing your launch. Then refund it. You need to be 100% certain real money flows work.',
            tag: 'must',
          },
          {
            name: 'Ask 3 people to test it who don\'t know the app',
            desc: 'Watch them use it without explaining anything. Where they get confused is where your onboarding needs work. This is more valuable than any analytics tool.',
            tag: 'must',
          },
          {
            name: 'Production environment variables all set',
            desc: 'Your app works locally but crashes in production? 90% of the time it\'s a missing environment variable. Go through every .env key and make sure it\'s also set in Vercel → Settings → Environment Variables.',
            tag: 'must',
            tools: 'Vercel / Netlify dashboard',
          },
          {
            name: 'Sentry and uptime monitoring live',
            desc: 'Turn these on before launch day, not after. You want to catch any errors from your very first real users.',
            tag: 'must',
            tools: 'Sentry + UptimeRobot',
          },
        ],
      },
      {
        label: 'Polish',
        items: [
          {
            name: 'Landing page clearly explains what the app does',
            desc: 'A visitor should understand what your app does in under 5 seconds. If your headline is vague or too clever, you\'re losing potential customers. Be direct: "A checklist for building production-ready apps" not "Elevate your development journey."',
            tag: 'must',
          },
          {
            name: 'Contact or support option exists',
            desc: 'At minimum, a support email address. Paying customers need a way to reach you. A simple hello@yourapp.com forwarded to your inbox is enough to start.',
            tag: 'must',
          },
          {
            name: 'Onboarding guides users to their first success',
            desc: 'What\'s the first meaningful thing a new user should do? Guide them there immediately after signup. Don\'t drop them on a blank dashboard and hope they figure it out.',
            tag: 'rec',
          },
        ],
      },
    ],
  },
  {
    id: 'postlaunch',
    icon: '📈',
    color: 'emerald',
    title: 'After Launch',
    sub: 'The first 30 days — don\'t go quiet after shipping',
    groups: [
      {
        label: 'Get Your First Users',
        items: [
          {
            name: 'Post on Reddit in relevant communities',
            desc: 'Find subreddits where your target user hangs out (r/indiehackers, r/SaaS, r/nocode, r/entrepreneur etc.). Share your story honestly — "I built X because I had Y problem." Don\'t just drop a link.',
            tag: 'must',
          },
          {
            name: 'Post on Product Hunt',
            desc: 'Product Hunt launches drive a burst of early traffic and credibility. Prepare a good tagline, screenshots, and a genuine founder story. Schedule it for a Tuesday–Thursday for best results.',
            tag: 'rec',
            tools: 'producthunt.com',
          },
          {
            name: 'Share your story on Twitter / X and LinkedIn',
            desc: 'Post about what you built, why you built it, and what you learned. Be real about the journey. "Building in public" posts consistently outperform regular product announcements.',
            tag: 'rec',
          },
          {
            name: 'Reach out to 10 people personally',
            desc: 'Your first 10 customers will likely come from your personal network. Message people directly — friends, Twitter connections, people in communities you\'re in. Ask them to try it and give feedback, not just to buy.',
            tag: 'must',
          },
        ],
      },
      {
        label: 'Improve Fast',
        items: [
          {
            name: 'Reply to every single early user',
            desc: 'Early users who get a personal reply from the founder become your biggest advocates. Reply to every signup email, every support message, every tweet. This doesn\'t scale — that\'s the point right now.',
            tag: 'must',
          },
          {
            name: 'Watch session recordings',
            desc: 'Tools like Hotjar or Microsoft Clarity (free) record how real users move through your app. Watching 10 recordings is more revealing than any amount of data. You\'ll see exactly where they get stuck.',
            tag: 'rec',
            tools: 'Microsoft Clarity (free) / Hotjar',
          },
          {
            name: 'Track your key numbers weekly',
            desc: 'Pick 3 numbers that matter: signups, active users, revenue. Check them every week. If a number drops, dig into why before moving on to new features.',
            tag: 'must',
          },
          {
            name: 'Collect testimonials from happy users',
            desc: 'Ask early happy users for a one-sentence testimonial you can put on your landing page. Real quotes from real people are more persuasive than any marketing copy you can write.',
            tag: 'rec',
          },
        ],
      },
    ],
  },
  {
    id: 'deployment',
    icon: '🌐',
    color: 'violet',
    title: 'Deployment',
    sub: 'Getting your app from your laptop to the world',
    groups: [
      {
        label: 'Hosting',
        items: [
          {
            name: 'Choose a hosting platform',
            desc: 'Vercel is the easiest for Next.js apps (deploys automatically when you push to GitHub). Netlify is great too. Railway or Render if you need a full server. Start simple — you can always move later.',
            tag: 'must',
            tools: 'Vercel (recommended for Next.js)',
          },
          {
            name: 'Auto-deploy on every code push',
            desc: 'Connect your GitHub repo to Vercel. Every time you push new code, Vercel automatically deploys it. No manual uploading, no downtime. This is how modern apps are shipped.',
            tag: 'must',
            tools: 'Vercel + GitHub',
          },
          {
            name: 'Staging environment set up',
            desc: 'Have a separate version of your app (staging.yourapp.com) to test changes before they go live. Vercel creates preview deployments automatically for every pull request.',
            tag: 'rec',
            tools: 'Vercel preview deployments',
          },
        ],
      },
      {
        label: 'Production Readiness',
        items: [
          {
            name: 'CDN serving your images and assets',
            desc: 'Vercel and Netlify automatically serve your static files (images, CSS, JS) from a global CDN — meaning files load from a server close to the user. This is already set up if you use them, just make sure you\'re not self-hosting large files.',
            tag: 'must',
            tools: 'Vercel / Netlify (automatic)',
          },
          {
            name: 'Know how to roll back a bad deploy',
            desc: 'In Vercel, go to your deployment history and click "Promote to Production" on any previous deployment to instantly roll back. Know where this button is before you need it urgently.',
            tag: 'must',
            tools: 'Vercel → Deployments',
          },
          {
            name: 'Set up a separate dev and production database',
            desc: 'Never test new features directly on your production database (the one real users\' data is in). Create a second Supabase project for development.',
            tag: 'rec',
            tools: 'Supabase (create separate project)',
          },
        ],
      },
    ],
  },
  {
    id: 'testing',
    icon: '🧪',
    color: 'pink',
    title: 'Testing Your App',
    sub: 'Making sure it actually works before users find out it doesn\'t',
    groups: [
      {
        label: 'Manual Testing (Start Here)',
        items: [
          {
            name: 'Test the three most critical user flows',
            desc: 'Sign up, core feature, payment. These three flows must work perfectly every time. Test them yourself after every major change.',
            tag: 'must',
          },
          {
            name: 'Test on a real phone, not just browser dev tools',
            desc: 'Browser developer tools\' "mobile view" lies to you. Test on an actual iPhone and Android. Touch targets, scrolling, and layout often break in ways you can\'t see on desktop.',
            tag: 'must',
          },
          {
            name: 'Test with slow internet',
            desc: 'Use Chrome DevTools → Network → Slow 3G and navigate your app. If things look broken or confusing while loading slowly, your loading states need work. Not everyone has fast WiFi.',
            tag: 'rec',
          },
          {
            name: 'Test what happens when things fail',
            desc: 'Temporarily turn off your internet and try to use your app. Disconnect from Supabase. What happens? Users will encounter these situations — make sure your app fails gracefully.',
            tag: 'rec',
          },
          {
            name: 'Test in Chrome, Safari, and Firefox',
            desc: 'Your app might look perfect in Chrome but have layout issues in Safari (especially on iPhone). Test in at least two browsers before launching. Safari is the most common source of browser-specific bugs.',
            tag: 'rec',
          },
        ],
      },
      {
        label: 'Automated Testing (When You\'re Ready)',
        items: [
          {
            name: 'Automated tests on your most critical flows',
            desc: 'Tools like Playwright can automatically click through your app and check that everything works. Once set up, they run on every code change and catch regressions before they reach users.',
            tag: 'opt',
            tools: 'Playwright (free)',
          },
          {
            name: 'Never test against your real user database',
            desc: 'If you run tests, use a separate test database. Running tests against production can corrupt or delete real user data.',
            tag: 'must',
          },
        ],
      },
    ],
  },
]

export function getAllItemIds(): string[] {
  const ids: string[] = []
  sections.forEach((section) => {
    section.groups.forEach((group, gi) => {
      group.items.forEach((_, ii) => {
        ids.push(`${section.id}-${gi}-${ii}`)
      })
    })
  })
  return ids
}

export function getTotalCount(): number {
  return sections.reduce(
    (total, section) =>
      total + section.groups.reduce((t, g) => t + g.items.length, 0),
    0
  )
}

export function getSectionItemIds(sectionId: string): string[] {
  const section = sections.find((s) => s.id === sectionId)
  if (!section) return []
  const ids: string[] = []
  section.groups.forEach((group, gi) => {
    group.items.forEach((_, ii) => {
      ids.push(`${sectionId}-${gi}-${ii}`)
    })
  })
  return ids
}
