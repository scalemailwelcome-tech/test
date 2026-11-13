# Klaviyo monthly client report — prompt (v2)

Revised after the Nootri October 2026 report audit. Copy everything below the line, then fill in the `{{…}}` values.

---

Build the monthly Klaviyo report for **{{CLIENT}}** as a PowerPoint deck (.pptx) **and** a PDF copy of the same slides. Follow the section structure of the attached template. Pull every number from the client's Klaviyo account. Don't estimate or invent a figure. If you can't get a number, leave a clearly marked gap and tell me.

## Inputs

- **Reporting period:** {{e.g. October 1–31, 2026}}. **Comparison period:** the previous calendar month, {{e.g. September 1–30, 2026}}.
- **Time zone:** the account's time zone (check `get_account_details`). Make sure date ranges start and end at local midnight; don't use UTC.
- **Currency:** the account's reporting currency. Write it on every money value, e.g. "PLN 1,203,310.24".
- **Subscriber growth (from the Klaviyo UI):** Email {{+N (+x%)}}, SMS {{+N (+x%)}}. *(Profiles → View subscriber growth, set to the reporting period. If I leave these blank, see "List growth" below.)*
- **Implemented projects this month:** {{list from the account manager, e.g. Sleep Cacao launch; Winback emails 4–6; Upsell flow; …}}
- **Revenue source:** Klaviyo Reporting API (campaign and flow reports), unless I write "Business Review" here: {{ }}

## Global rules

1. **One source per metric, used for both months.** Never mix Klaviyo views in one comparison. Name the source in a footnote on every slide that shows numbers.
2. **Label every value with its month and year** ("October 2026", "September 2026"). Put the reporting month and the previous month side by side, previous month on the left.
3. **Make change easy to see:** show the change in currency and in percent with ▲/▼, green for up and red for down.
4. **Attribution:** use the store's main *Placed Order* metric (the Shopify one if there's more than one). Say which metric you used.
5. **Leave out internal test sends** (names containing "TEST", or tiny seed audiences). Footnote what you removed, with recipient count and revenue.
6. **Leave out ROI.**
7. **Reconcile before building:** total revenue must equal campaign revenue plus flow revenue, campaign revenue must equal email plus SMS, and the table rows must add up to the headline figures. If two Klaviyo views disagree (for example, the flow report vs. Business Review), report the agreed source and footnote the difference and its size.

## Sections

### 1. Revenue — reporting month vs. previous month
- Lead with **Total Klaviyo revenue** (campaigns + flows) and **Campaign revenue** (email + SMS). Show both months side by side with a clustered bar chart.
- Then **revenue by channel:** campaign email, campaign SMS, and flows, with both months and a bar chart. Keep this slide; it's now part of the template.
- Show exact amounts on the cards and rounded amounts in the chart data labels.
- Compute every month the same way. For the previous month, don't pull flow revenue from a different view than the one used for the reporting month.

### 2. List growth
- Report **account-wide subscriber growth, separately for Email and SMS**, for the exact period (e.g. "October 1–31, 2026"). Don't base it on a single list: new sign-ups move between lists (e.g. Popup → Black Friday Early Access), so a single list undercounts.
- **Source:** the numbers I supply from Klaviyo's Profiles → View subscriber growth, including the % growth.
- If I haven't supplied them, calculate an approximation from events: *Subscribed to Email Marketing* minus *Unsubscribed from Email Marketing* (unique profiles), and *Subscribed to Text Messaging Marketing* minus *Unsubscribed from Text Messaging Marketing*. Label the result **"approximation — confirm in Klaviyo"**. These event counts don't exactly match the UI figure.
- Never report 0 losses unless every removal type was checked. That includes unsubscribes, SMS STOP opt-outs, suppressions and manual removals.
- Show the previous month's figure for comparison.

### 3. Implemented projects & revenue impact
- List each project I gave you: name, launch date, what it is, and its attributed revenue in the reporting month (from the flow or campaign report), with a previous-month comparison where it existed. If a project has no measurable revenue yet, write "launched {{date}}; no full month of data yet".
- If I didn't supply a list, keep a placeholder **and** tell me the slide is empty. Don't leave it silently blank.

### 4. Campaigns sent this month
- Include **every campaign sent in the period** (email and SMS), sorted by send date, with: campaign name, channel, send date and time, **included audiences**, **excluded audiences**, open rate, click-through rate, and revenue.
- SMS open rate is "n/a".
- Page the table across slides so text stays at 10 pt or larger.

### 5. Split tests (A/B)
- Add a section for **all A/B tests that ran in the period**, both **flow A/B tests** (flow messages with more than one variation; group the flow report by `variation`) and **campaign A/B tests** (campaign messages with an `ab_test` setting or several variations).
- For each test show: where it ran (flow/message or campaign), what was tested, each variation's recipients, open rate, click-through rate and revenue, the winner, and whether the test is concluded or still running.
- If there were no tests, say so on the slide.

### 6. Deliverability — all email, flows included
- Report deliverability for **all email (campaigns + flows)**, so it matches Klaviyo's Deliverability report (Analytics → Deliverability → Email → Reports). Combine the campaign report and the flow report for email: add up recipients, delivered, unique opens, unique clicks, bounces, unsubscribes and spam complaints, then compute the rates. *(Check: for Nootri, October 2026, this gives 25.4% open and 1.39% click, matching the UI.)*
- Rates: open = unique opens ÷ delivered; click = unique clicks ÷ delivered; bounce = bounces ÷ recipients; unsubscribe = unsubscribes ÷ delivered; spam = complaints ÷ delivered.
- Show the reporting month and the previous month, and rate each against the agreed thresholds: open green above 33%; click red below 0.8%; bounce green below 1%; unsubscribe green below 0.3%, amber 0.3–1%; spam green below 0.01%.
- Base the status (green, amber or red) on the all-email figure, not on campaigns alone. Campaigns go to engaged segments, so their bounce rate looks far better than the account's.
- Optionally, add a small "campaigns only" row for context.

### 7. Top campaigns by revenue
- Rank **every campaign sent in the period** by revenue, highest first. Rank each send on its own (don't merge Gmail/non-Gmail versions).
- Show the top 5 with name, open rate, click-through rate and revenue. **Don't show audiences on this slide.**
- Add the top 5's combined revenue and its share of campaign revenue, plus a ranking check naming #6 and its revenue.

### 8. Learnings and 9. Next steps
- Keep these as placeholders for account manager commentary.

## Before you deliver

- Recheck every headline number against its source and confirm the reconciliation sums.
- Render every slide and check for overflow, overlaps, and month or currency labels that are missing.
- Deliver the .pptx and the PDF, and tell me which numbers were approximations, which sections are still placeholders, and any differences between Klaviyo views.
