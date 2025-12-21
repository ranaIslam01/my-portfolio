# ✉️ Email Setup Guide - Gmail Configuration

## যা করতে হবে

আপনার contact form কাজ করানোর জন্য Gmail এর একটি App Password ব্যবহার করতে হবে।

---

## Step 1: Google Account এ যান

1. এই লিংকে যান: **https://myaccount.google.com/apppasswords**
2. আপনার Google account এ লগইন করুন
3. দুই-ফ্যাক্টর অথেন্টিকেশন enable থাকতে হবে

---

## Step 2: App Password তৈরি করুন

1. "Select the app and device you want to generate the app password for" dropdown এ যান
2. **App**: "Mail" সিলেক্ট করুন
3. **Device**: "Windows Computer" (অথবা আপনার device) সিলেক্ট করুন
4. **Generate** বাটন ক্লিক করুন
5. Google একটি **16-character password** দেবে (spaces সহ)

---

## Step 3: Environment Variables সেট করুন

`.env.local` ফাইল খুলুন এবং আপডেট করুন:

```
EMAIL_USER=dev.rana.cse@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

**গুরুত্বপূর্ণ**:

- Spaces সহ যেভাবে Google দিয়েছে সেভাবেই পেস্ট করুন
- অথবা spaces বাদ দিয়ে পেস্ট করতে পারেন (nodemailer উভয়ই সাপোর্ট করে)

---

## Step 4: Dev Server Restart করুন

```bash
npm run dev
```

---

## Test করুন

1. http://localhost:3000 এ যান
2. Contact form পূরণ করুন
3. "Send Message" ক্লিক করুন
4. Success message দেখবেন

**দুটি ইমেইল পাবেন:**

- ✅ প্রথম: আপনার আসল ইনবক্সে (dev.rana.cse@gmail.com)
- ✅ দ্বিতীয়: Form submitter এর কাছে confirmation ইমেইল

---

## Troubleshooting

### "SMTP Error" পাচ্ছেন?

**সম্ভাব্য কারণ:**

1. `.env.local` ফাইল সেভ নেই
2. Environment variables ভুল
3. Google App Password ভুল
4. Dev server restart করা হয়নি

**সমাধান:**

```bash
# 1. .env.local চেক করুন
# 2. Dev server restart করুন
npm run dev

# 3. Console এ error দেখুন (F12)
```

### Gmail এ "Less secure app access" পাচ্ছেন?

দুই-ফ্যাক্টর অথেন্টিকেশন এবং App Password ব্যবহার করছেন কিনা চেক করুন।

### Password কাজ করছে না?

1. নতুন App Password তৈরি করুন (পুরানোটা revoke করুন)
2. Spaces সহ পেস্ট করুন যেমন Google দিয়েছে
3. Dev server restart করুন

---

## ইমেইল আউটপুট

### Sender পাবে:

```
নতুন Contact Form জমা

নাম: [user name]
ইমেইল: [user email]
বিষয়: [subject]

বার্তা:
[message content]
```

### User পাবে (Confirmation):

```
ধন্যবাদ [Name],

আমরা আপনার বার্তা সফলভাবে পেয়েছি। শীঘ্রই আপনার সাথে যোগাযোগ করব।

আপনার বার্তা:
[message content]
```

---

## ডিপ্লয় করার সময়

Vercel বা অন্য হোস্টে ডিপ্লয় করলে environment variables সেট করতে হবে:

### Vercel এ:

1. Vercel Dashboard এ যান
2. Project Settings → Environment Variables
3. যোগ করুন:
   - `EMAIL_USER` = dev.rana.cse@gmail.com
   - `EMAIL_PASSWORD` = your-app-password
4. Redeploy করুন

---

## আরও তথ্য

- [Google App Passwords Help](https://support.google.com/accounts/answer/185833)
- [Nodemailer Gmail Setup](https://nodemailer.com/smtp/gmail/)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

---

**সব সেটআপ হয়ে গেলে contact form সম্পূর্ণভাবে কাজ করবে!** ✅
