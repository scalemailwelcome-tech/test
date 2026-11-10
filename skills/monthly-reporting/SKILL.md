---
name: monthly-reporting
description: Produce monthly brand reports in a copy of the approved Gamma master using verified Klaviyo data and Asana project records.
---

# Monthly reporting

1. Confirm Klaviyo plugin access before any report work. Run a read-only plugin call and verify the returned account or data belongs to the requested brand. Installation, a plugin tag, and a signed-in browser do not satisfy this check. If the plugin cannot be called, the call fails, or the account is wrong, tell the user immediately and stop before starting a browser fallback.
2. Confirm read access to the brand's Asana project/calendar.
3. Confirm access to the [Gamma master](https://gamma.app/docs/bmrwm38v9ge7p2l) and the ability to duplicate and edit a copy.
4. Duplicate the master report page before editing. Use Gamma's native duplication in the signed-in UI if the connector has no duplicate action. Verify the destination has a different ID and contains only the intended report page, since the source contains other client pages. Keep the master read-only during reporting. If duplication is unavailable, request a duplicate link and continue verified data collection.
5. Rename the actual Gamma file using its document title field, and set the cover to **[Month] Monthly Report - [Year] | [Brand]** using the month measured. Verify the saved Gamma document title matches the cover before handoff. If the connector only updates cards, use the Gamma editor title field. Put the approved brand logo on the left and retain the Retention Only logo on the right. Ask for the brand logo if missing and continue with the slot in place.
6. Pull data after the reporting month closes. Default to the latest completed calendar month if unspecified and state the dates. Compare with the immediately preceding calendar month using the brand's reporting timezone, currency and matching conversion settings. Save source links, filters and pull date with the working data. Keep AM commentary prompts for handoff. Keep KS production instructions in the skill or working record.

## Klaviyo source and ownership

- Use the Klaviyo plugin for all supported work by default. Pull data in bulk where the plugin supports it. Use the browser only for a specific step it can complete faster end to end, or for something the plugin cannot do, such as capturing a required dashboard screenshot. State the reason for the exception and return to the plugin for the remaining steps. A browser exception never substitutes for the initial plugin check.
- The reporting agent is the Klaviyo specialist (KS). Verify and fill every KS-owned field that Klaviyo can support, including send times, exact included and excluded audiences, and ranked campaign subject lines and metrics. Check the account, reporting dates, filters, and source definitions yourself. Calculate supported figures from verified inputs and re-read the saved Gamma copy to confirm the values landed in the correct fields.
- Before handoff, scan the entire Gamma copy for empty KS fields and generic verification labels. Use “To be verified” only if the user personally must verify a specific item, and name exactly what they need to confirm. If a source genuinely cannot provide a value, record the specific reason, flag the gap in the handoff, and keep the report in draft when the value is required. The user reviews completed work. AM commentary stays with the AM.

## Working data and Gamma

Keep one working record in the report workspace named `[Brand] [Month] [Year] - verified findings.md`. At the top log the Gamma copy URL, account, timezone, currency, date ranges, conversion metric and pull date. Under each section log source links or IDs, filters, raw values, calculations, evidence filenames, destination card and any blocker. Before entering data, read the copied template and map each field below to its actual card, column, or image slot. Follow the template’s headings, column order, row order and image slots. The explicit section rules below supersede stale template placeholders, such as standalone Performance RPR or named-list growth. If the template has changed and a field cannot be mapped confidently, flag the exact mismatch and finish the other sections. Read the saved cards back against the working record before handoff.

## Fill the report in this order

### Cover and contents

- **Source** — Approved brand assets and Gamma copy
- **Pull and verify** — Check title, logo placement, card order, and destination card IDs.
- **Log in Gamma** — Cover uses the exact file title and approved logos. Contents uses exact card headings, internal links, and the deduplicated campaign count.
- **Section rules** — Match the copy title, section titles, order and unique campaign count. Link every contents entry to its exact card in the report copy using the copy page ID and destination card ID. Recheck the saved hyperlinks after edits and test a jump before handoff.

### Performance

- **Source** — Klaviyo Analytics → Dashboards → Business Review
- **Pull and verify** — Pull both full months with matching currency, channel and conversion metric. Change = (current − prior) ÷ prior × 100. Show N/A if prior is zero.
- **Log in Gamma** — Place both month-labeled screenshots above the revenue columns. Under each metric enter Prior: [amount] | Current: [amount] | Change: [signed %].
- **Section rules** — In Klaviyo Analytics → Dashboards → Business Review, set both month ranges with matching filters. Keep the concise Prior | Current | Change line for attributed, campaign and flow revenue. Omit the separate revenue-per-recipient (RPR) line, any prompt to add it, and the dashboard source link from this card. The screenshots provide the supporting context. Keep the dashboard link in working data. Capture and place the filtered dashboard screenshots for total attributed, campaign and flow revenue, with date ranges and filters visible. Verify the screenshots appear in Gamma before handoff and flag any missing images. KS adds figures and AM explains changes.

### List Growth (Subscriber Growth)

- **Source** — Klaviyo Audience → Profiles → View subscriber growth
- **Pull and verify** — Set the reporting month. Use Overview for the screenshot and channel tabs or CSV for exact counts. Net change = closing − opening. Growth % = net change ÷ opening × 100.
- **Log in Gamma** — On List Growth, insert the filtered Overview screenshot. Log Email and SMS separately with opening date/count, closing date/count, signed net change and growth %.
- **Section rules** — Use account-wide subscriber growth from Klaviyo Audience → Profiles → View subscriber growth. Use the plugin if it exposes the same report data. Otherwise, use this page in the browser after the initial plugin access check. Set the date range to the reporting month. Use Overview for the screenshot and the Email and Text message tabs or the report's CSV export for exact figures when available. Report each applicable channel separately, using verified opening and closing subscriber counts, net change, and growth percentage when available. Keep rounded figures labeled as rounded and use Klaviyo's displayed trend when exact counts are unavailable. Never substitute membership from an individual list or segment, or the headline profile counts on the Profiles page. Capture and place the filtered Subscriber Growth overview with the dates and channels visible. KS records the figures and any source limitations. AM adds context.

### Implemented Projects & Revenue Impact

- **Source** — The brand’s Asana project, calendar, and implementation tasks.
- **Pull and verify** — Find work implemented during the reporting month. For each project, verify the implementation date recorded in the Asana task or its launch evidence. Task completion alone is insufficient. Log the exact date and its evidence link in the working record. Flag a missing date if Asana does not substantiate one.
- **Log in Gamma** — Keep the Project | Period columns. Link the project name directly to its Asana task. In Period, enter the full verified Asana date, including day, month and year (e.g., October 15, 2026). Preserve AM context.

### Split Tests

- **Source** — **Required first stop and primary source: [Klaviyo Experiments](https://www.klaviyo.com/experiments).**
- **Pull and verify** — Start in Experiments for the verified brand account. Check **both Campaigns and Flows** in Klaviyo Experiments for the specific month named in the report title. Both checks are required, and the same date scope applies to each. Record in-scope tests from both categories in the Split Tests section. Verify both categories before reporting that no split tests ran. Filter to that calendar month in the brand’s reporting timezone, or verify each experiment’s dates if the view lacks a date filter. Include tests that ran during that month, including any still running. Exclude tests that ran exclusively outside it, including tests from the comparison month. Open each in-scope experiment’s results. Use the plugin for equivalent Experiments data when available. If it cannot retrieve that view, use the Experiments page in the browser after the initial plugin access check. Verify the test, variation data and winner criterion. Log inputs and calculations using the rules below.
- **Log in Gamma** — Test (with results link) | Period | Leading variation | Revenue uplift % | Est. additional revenue per campaign. For every campaign and flow test, log its verified actual start and end dates, including the year. Use the start date followed by “Ongoing” if the test is still running. Keep the actual dates when a test spans reporting months. If an experiment date is unavailable, flag the missing date without guessing.
- **Section rules** — Check Experiments before concluding that no tests ran. Use campaign A/B reports to fill missing variation details and cross-check Asana and relevant flow branches for tests Experiments may omit, such as flow time-delay tests. Record test type, leading variation and results link. Keep Placed Order Rate separate from revenue uplift. Variation RPR = attributed revenue ÷ successful deliveries. Revenue uplift = (leading variation RPR − comparison RPR) ÷ comparison RPR × 100. Estimated additional revenue per campaign = that RPR difference × combined successful deliveries, comparing the two full-audience scenarios. Monthly projections require comparable monthly delivery volume. Treat sparse results as directional. Internal guidance calls for 50 conversions per variation and repeating a campaign change across 5–10 comparable sends before relying on projections. Capture variation results when useful. AM explains the findings.

### Campaigns Sent This Month ([Count])

- **Source** — Klaviyo sent campaign list and campaign reports
- **Pull and verify** — Pull sent email metadata in bulk and join by campaign ID. When the browser exception applies, use sent campaign Reports → Overview for actual send time and the included/excluded lists and segments below the engagement chart.
- **Log in Gamma** — Campaign | Channel | Date | Send time | Included audiences | Excluded audiences. Number rows newest first, link campaign names, and show the deduplicated count in the heading and contents.
- **Section rules** — Filter Klaviyo Campaigns to sent emails within the month and check archived sends where available. Deduplicate IDs and group confirmed segment-only copies of the same email and send occasion. Keep separate sends and distinct creative separate. Record campaign name, channel, date, send time and included/excluded audiences. Use the brand timezone for boundaries and sorting; omit timezone from the table. Use the latest send time for grouped rows. Sort latest to earliest and count unique campaigns after grouping. Hyperlink each name directly to its actual Klaviyo campaign. Use a verified representative link for grouped sends and retain all source IDs and URLs in working data.

### Best Performing Campaigns (Ranked List)

- **Source** — Klaviyo campaign report (Reports → Overview) for each individual send, using the same conversion metric as Performance (Shopify Placed Order).
- **Pull and verify** — Pull every email campaign sent in the reporting month (brand timezone), excluding internal test sends. Rank individual sends by attributed revenue. Verify subject line and metrics per send ID and log the raw inputs.
- **Log in Gamma** — Campaign | Subject Line | Revenue (PLN) | Open Rate | Click Rate | Revenue per Delivery (PLN) | AOV (PLN) | Key Insights. One row per send, linked to that send's own report. Key Insights stays “[AM fills in Key Insights]”.
- **Section rules**
  - **One send = one row.** Every send is its own entry with its own revenue, even when it is a segment copy of the same campaign (e.g., “(Gmail Profiles)” and “(Non Gmail Profiles)”). Never add sends together or average them: each send can perform for different reasons, and a combined row cannot be traced back to a single Klaviyo report.
  - **Ranking.** Take the top seven sends by attributed revenue. Both copies of a campaign may appear if both rank, and a copy that misses the top seven is simply left out. Email campaigns only; exclude internal test sends (e.g., “… TEST”, seed/GlockApps lists).
  - **Campaign name and link.** Use the exact send name as shown in Klaviyo, including the segment suffix. Hyperlink it to that send's report: `https://www.klaviyo.com/campaign/{campaign message ID}/reports/overview`. In reporting data, that is the `campaign_message_id`.
  - **Subject line.** Take the actual sent subject from the send's variations. If A/B variations used different subjects, list each one with its variation letter. Otherwise show the single subject once, with emojis exactly as sent.
  - **Metrics.** Use the send's own report values, never figures derived from other sends:
    - Revenue = attributed conversion value, 2 decimals.
    - Open rate = unique opens ÷ delivered, 2 decimals.
    - Click rate = unique clicks ÷ delivered, 2 decimals.
    - Revenue per delivery = revenue ÷ delivered, 2 decimals.
    - AOV = revenue ÷ attributed orders, 2 decimals.
  - **Click-through check.** Before handoff, open every linked report and confirm its revenue, open rate, click rate and AOV match the row. If they don't, the row or the link is wrong; fix it rather than explain it.
  - **Freshness.** Opens, clicks and attributed revenue keep accruing after a send, especially for sends in the last days of the month. Pull after the month closes, record the pull date in the working record, and re-pull late-month sends if they are older than the rest of the data at handoff.
  - **Cohort note.** Campaign report revenue (the send's lifetime attributed revenue) can differ from the order-period totals in Business Review. Don't reconcile the two against each other.
  - **Scope.** This rule applies only to this ranked table. The Campaigns Sent heading still shows the net count of distinct campaigns; don't change it to match the number of sends.
  - Preserve Key Insights for the AM.

### Top 7 Campaigns (Email Visuals)

- **Source** — Matching Asana campaign task and linked Figma frame
- **Pull and verify** — Verify the frame matches the ranked sent campaign or variation. Log the task, frame and export filename.
- **Log in Gamma** — Place one full-email JPEG at 2× per ranked send, in the same order as the Best Performing Campaigns table. Label each with the exact send name from that table (including the segment suffix, e.g., “(Gmail Profiles)”) and the variation where applicable.
- **Matching rule** — The visuals card mirrors the ranked table one-to-one: same seven sends, same order, same names. When the ranked table changes, update labels and images together. A design shared by several segment copies may be reused, but confirm it is the creative that went to the ranked send. If the send ran A/B content variations, state which variation is shown.
- **Section rules** — Use Figma as the source for full email images. In ranked order, take the exact campaign name from Klaviyo and find the matching task in the brand’s Asana project using the shared naming convention. Open the Figma link on that task. If the link is missing, broken, or does not lead to the email, search the brand’s Figma files and frames using the same campaign name. Confirm the full frame matches the sent campaign and variation where relevant. Export the full email frame from Figma as **JPEG at 2×** using available export controls and place it in the Gamma report copy. Label the campaign and variation where relevant. Continue across cards if needed for readability. If the frame or export is unavailable, leave a labeled slot and report the missing visual.

### Deliverability

- **Source** — Klaviyo Analytics → Deliverability → Email → Reports
- **Pull and verify** — Filter to the reporting month and All messages. Clear inbox provider selection for account-wide rates. Capture the report with dates and scope visible.
- **Log in Gamma** — In the Email evidence area place the screenshot and record Open Rate | Click Rate | Bounce Rate | Spam Complaint Rate | Unsubscribe Rate using the source precision.
- **Section rules** — In Analytics → Deliverability, filter to the reporting month. Record available email open, click, bounce, spam complaint and unsubscribe rates. Capture the filtered overview. AM explains material changes.

### Learnings and Next Steps

- **Source** — Verified report and supporting evidence
- **Pull and verify** — AM owns analysis and recommendations.
- **Log in Gamma** — Preserve the separate Learnings and Next Steps cards and their AM prompts.
- **Section rules** — Preserve AM prompts for what worked, what underperformed, why, and follow-up actions.

## Screenshots and handoff

Before AM handoff, remove KS-only instructions and process notes from the Gamma report copy, including bracketed template text that tells the KS how to collect, sort, group, count, link, or enter data. For Campaigns Sent This Month, keep the completed heading with its actual count and the linked campaign table. Remove the instruction paragraph that describes how to build it. For mixed KS/AM prompts, remove the KS instruction and retain the AM guidance. Preserve the instructions in the master template for reuse.

The reporting agent owns pulling and verifying source data, entering it in Gamma, capturing the required screenshots, and placing them on the correct cards. The user's review is for checking that the entered data and screenshots are correct. Do not assign collection, entry, capture, or placement to the user. If access or tooling blocks a step, use only the permitted browser exceptions above for Klaviyo and try available authorized alternatives for other sources and report the specific blocker. Ask only for the access or decision needed to unblock it. Keep the report in draft until the required data and evidence are in place. AM commentary remains the AM's responsibility.

Use available browser or desktop screenshot controls in the verified account. Use screenshots for reporting views and Figma exports for the ranked email visuals. Place images in the report copy through an available Gamma upload or image placement workflow. If capture or placement is unavailable, keep labeled slots with source links and identify missing visuals at handoff. Flag missing data or zero denominators instead of inventing values. Verify the copy's brand, dates, order, count, links, and placed images before returning its URL. A placeholder is an outstanding item. Name the missing metric or image, its source, and the specific blocker at handoff.
