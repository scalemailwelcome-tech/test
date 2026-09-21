# Weekly Klaviyo report — Routine prompts (4 clients)

Create one Routine per client at **claude.ai → Routines**.

For each: schedule **weekly, Wednesday, 09:00** your time, turn on **that client's
Klaviyo connector**, and paste the matching block below into the instructions box.

---

## 1. femdisc UG — connector: `Klaviyo`

```
Generate the weekly Klaviyo performance report for femdisc. Use the Klaviyo
MCP server. Account currency is EUR; account timezone is Europe/Berlin.

REPORTING WINDOW — 7 full days, no overlap with any previous week:
Last Wednesday 00:00:00 through yesterday (Tuesday) 23:59:59, Europe/Berlin
time. Convert to UTC for the API (CEST = UTC+2, CET = UTC+1).

CONVERSION METRIC:
Use conversion_metric_id "WcePh5" — the Shopify "Placed Order" metric. Always
use the Shopify one unless told otherwise. If you must call get_metrics, pass
fields_metric: ["name"] and filter the result rather than reading it whole.

STEPS:
1. Campaigns: get_campaign_report with conversion_metric_id WcePh5, the
   timeframe above, group_by ["campaign_id","campaign_message_id",
   "send_channel"], statistics ["recipients"], value_statistics
   ["conversion_value"]. Include only campaigns that sent inside the window.
   One line per campaign, sorted by revenue descending. Do NOT show the send
   count or any other per-campaign detail. Keep email and SMS separate if
   both exist.

2. Flows: get_flow_report with the same conversion_metric_id and timeframe,
   group_by ["flow_id"], value_statistics ["conversion_value"]. Sum the
   per-flow conversion_value in the "flow_aggregation" array — NOT the
   per-message "results" array, which double-counts at flow level.

3. List growth — Klaviyo's own net membership change for the main signup list.
   Source: segment "RPT | Newsletter Members - do not edit", segment_id XSdM7F.
   It mirrors the list that triggers the live welcome flow (Newsletter, T6sQea).

   a. Confirm the segment still points at the right list: get_flows with
      filter and(equals(trigger_type,"Added to List"),equals(archived,false)).
      Find the live welcome flow (ignore drafts; ignore non-welcome
      list-triggered flows like sunset/unengaged; do not filter on any name
      prefix). get_flow on it with additional_fields_flow ["definition"] and
      fields_flow ["definition.triggers"] to read its trigger list id. If that
      id is not T6sQea, write "unavailable" for list growth and state that the
      reporting segment needs repointing.

   b. query_segment_series with filter equals(segment_id,"XSdM7F"), interval
      "daily", statistics ["net_members_changed","total_members"], timeframe =
      the reporting window.

   c. COVERAGE CHECK: if total_members is 0 on any day in the window, OR the
      window includes 2026-09-21 (the segment's creation date, when Klaviyo
      recorded the entire existing membership as "added"), write "unavailable".
      Never report a partial or creation-inflated sum.

   d. Otherwise sum net_members_changed across every daily bucket and report
      that sum as a single number. Nothing else. Work the arithmetic
      explicitly — list every bucket before adding.

4. Round revenue to whole EUR with thousands separators (€40,093).

OUTPUT — exactly this format, nothing else. No send counts, no bracketed
annotations, no commentary, no caveats, no notes below the report. It must
be copy-pasteable as-is:

Week: [start date] – [end date]

Campaign A -  €XYZ
Campaign B -  €XYZ
Campaign C -  €XYZ

Weekly flow revenue: [total]
Weekly campaign revenue: [total]
Weekly list growth: [net]

RULES:
- Never estimate or interpolate. If a number can't be retrieved, write
  "unavailable" on that line and nothing else.
- If no campaigns sent in the window, write "No campaigns sent this week".
- Campaign revenue total must equal the sum of the campaign lines.
```

---

## 2. Patriot Shave — connector: `Patriot_Shave`

```
Generate the weekly Klaviyo performance report for Patriot Shave. Use the
Patriot_Shave MCP server. Account currency is USD; account timezone is
US/Mountain.

REPORTING WINDOW — 7 full days, no overlap with any previous week:
Last Wednesday 00:00:00 through yesterday (Tuesday) 23:59:59, US/Mountain
time. Convert to UTC for the API (MDT = UTC-6, MST = UTC-7).

CONVERSION METRIC:
Use conversion_metric_id "TRxuzn" — the Shopify "Placed Order" metric. Always
use the Shopify one unless told otherwise. If you must call get_metrics, pass
fields_metric: ["name"] and filter the result rather than reading it whole.

STEPS:
1. Campaigns: get_campaign_report with conversion_metric_id TRxuzn, the
   timeframe above, group_by ["campaign_id","campaign_message_id",
   "send_channel"], statistics ["recipients"], value_statistics
   ["conversion_value"]. Include only campaigns that sent inside the window.
   One line per campaign, sorted by revenue descending. Do NOT show the send
   count or any other per-campaign detail. Keep email and SMS separate if
   both exist.

2. Flows: get_flow_report with the same conversion_metric_id and timeframe,
   group_by ["flow_id"], value_statistics ["conversion_value"]. Sum the
   per-flow conversion_value in the "flow_aggregation" array — NOT the
   per-message "results" array, which double-counts at flow level.

3. List growth — Klaviyo's own net membership change for the main signup list.
   Source: segment "RPT | Newsletter Members - do not edit", segment_id WhEEuR.
   It mirrors the list that triggers the live welcome flow (Newsletter, WE7GgV).

   a. Confirm the segment still points at the right list: get_flows with
      filter and(equals(trigger_type,"Added to List"),equals(archived,false)).
      Find the live welcome flow (ignore drafts; ignore non-welcome
      list-triggered flows like sunset/unengaged; do not filter on any name
      prefix). get_flow on it with additional_fields_flow ["definition"] and
      fields_flow ["definition.triggers"] to read its trigger list id. If that
      id is not WE7GgV, write "unavailable" for list growth and state that the
      reporting segment needs repointing.

   b. query_segment_series with filter equals(segment_id,"WhEEuR"), interval
      "daily", statistics ["net_members_changed","total_members"], timeframe =
      the reporting window.

   c. COVERAGE CHECK: if total_members is 0 on any day in the window, OR the
      window includes 2026-09-21 (the segment's creation date, when Klaviyo
      recorded the entire existing membership as "added"), write "unavailable".
      Never report a partial or creation-inflated sum.

   d. Otherwise sum net_members_changed across every daily bucket and report
      that sum as a single number. Nothing else. Work the arithmetic
      explicitly — list every bucket before adding.

4. Round revenue to whole USD with thousands separators ($40,093).

OUTPUT — exactly this format, nothing else. No send counts, no bracketed
annotations, no commentary, no caveats, no notes below the report. It must
be copy-pasteable as-is:

Week: [start date] – [end date]

Campaign A -  $XYZ
Campaign B -  $XYZ
Campaign C -  $XYZ

Weekly flow revenue: [total]
Weekly campaign revenue: [total]
Weekly list growth: [net]

RULES:
- Never estimate or interpolate. If a number can't be retrieved, write
  "unavailable" on that line and nothing else.
- If no campaigns sent in the window, write "No campaigns sent this week".
- Campaign revenue total must equal the sum of the campaign lines.
```

---

## 3. UK.PROTEIN.COM — connector: `Protein_UK`

```
Generate the weekly Klaviyo performance report for UK.PROTEIN.COM. Use the
Protein_UK MCP server. Account currency is GBP; account timezone is
US/Eastern.

REPORTING WINDOW — 7 full days, no overlap with any previous week:
Last Wednesday 00:00:00 through yesterday (Tuesday) 23:59:59, US/Eastern
time. Convert to UTC for the API (EDT = UTC-4, EST = UTC-5).

CONVERSION METRIC:
Use conversion_metric_id "WhJsF3" — the Shopify "Placed Order" metric. Always
use the Shopify one unless told otherwise. If you must call get_metrics, pass
fields_metric: ["name"] and filter the result rather than reading it whole.

STEPS:
1. Campaigns: get_campaign_report with conversion_metric_id WhJsF3, the
   timeframe above, group_by ["campaign_id","campaign_message_id",
   "send_channel"], statistics ["recipients"], value_statistics
   ["conversion_value"]. Include only campaigns that sent inside the window.
   One line per campaign, sorted by revenue descending. Do NOT show the send
   count or any other per-campaign detail. Keep email and SMS separate if
   both exist.

2. Flows: get_flow_report with the same conversion_metric_id and timeframe,
   group_by ["flow_id"], value_statistics ["conversion_value"]. Sum the
   per-flow conversion_value in the "flow_aggregation" array — NOT the
   per-message "results" array, which double-counts at flow level.

3. List growth — Klaviyo's own net membership change for the main signup list.
   Source: segment "RPT | Newsletter Members - do not edit", segment_id WmPqMm.
   It mirrors the list that triggers the live welcome flow (Newsletter, TaDdzU).

   a. Confirm the segment still points at the right list: get_flows with
      filter and(equals(trigger_type,"Added to List"),equals(archived,false)).
      Find the live welcome flow (ignore drafts; ignore non-welcome
      list-triggered flows like sunset/unengaged; do not filter on any name
      prefix). get_flow on it with additional_fields_flow ["definition"] and
      fields_flow ["definition.triggers"] to read its trigger list id. If that
      id is not TaDdzU, write "unavailable" for list growth and state that the
      reporting segment needs repointing.

   b. query_segment_series with filter equals(segment_id,"WmPqMm"), interval
      "daily", statistics ["net_members_changed","total_members"], timeframe =
      the reporting window.

   c. COVERAGE CHECK: if total_members is 0 on any day in the window, OR the
      window includes 2026-09-21 (the segment's creation date, when Klaviyo
      recorded the entire existing membership as "added"), write "unavailable".
      Never report a partial or creation-inflated sum.

   d. Otherwise sum net_members_changed across every daily bucket and report
      that sum as a single number. Nothing else. Work the arithmetic
      explicitly — list every bucket before adding.

4. Round revenue to whole GBP with thousands separators (£40,093).

OUTPUT — exactly this format, nothing else. No send counts, no bracketed
annotations, no commentary, no caveats, no notes below the report. It must
be copy-pasteable as-is:

Week: [start date] – [end date]

Campaign A -  £XYZ
Campaign B -  £XYZ
Campaign C -  £XYZ

Weekly flow revenue: [total]
Weekly campaign revenue: [total]
Weekly list growth: [net]

RULES:
- Never estimate or interpolate. If a number can't be retrieved, write
  "unavailable" on that line and nothing else.
- If no campaigns sent in the window, write "No campaigns sent this week".
- Campaign revenue total must equal the sum of the campaign lines.
```

---

## 4. Stars + Honey — connector: `S_H`

```
Generate the weekly Klaviyo performance report for Stars + Honey. Use the S_H
MCP server. Account currency is USD; account timezone is US/Eastern.

REPORTING WINDOW — 7 full days, no overlap with any previous week:
Last Wednesday 00:00:00 through yesterday (Tuesday) 23:59:59, US/Eastern
time. Convert to UTC for the API (EDT = UTC-4, EST = UTC-5).

CONVERSION METRIC:
Use conversion_metric_id "VazWsM" — the Shopify "Placed Order" metric. Always
use the Shopify one unless told otherwise. If you must call get_metrics, pass
fields_metric: ["name"] and filter the result rather than reading it whole.

STEPS:
1. Campaigns: get_campaign_report with conversion_metric_id VazWsM, the
   timeframe above, group_by ["campaign_id","campaign_message_id",
   "send_channel"], statistics ["recipients"], value_statistics
   ["conversion_value"]. Include only campaigns that sent inside the window.
   One line per campaign, sorted by revenue descending. Do NOT show the send
   count or any other per-campaign detail. Keep email and SMS separate if
   both exist.

2. Flows: get_flow_report with the same conversion_metric_id and timeframe,
   group_by ["flow_id"], value_statistics ["conversion_value"]. Sum the
   per-flow conversion_value in the "flow_aggregation" array — NOT the
   per-message "results" array, which double-counts at flow level.

3. List growth — Klaviyo's own net membership change for the main signup list.
   Source: segment "RPT | Newsletter Members - do not edit", segment_id RPrzLc.
   It mirrors the list that triggers the live welcome flow (Newsletter, XgGmh3).

   a. Confirm the segment still points at the right list: get_flows with
      filter and(equals(trigger_type,"Added to List"),equals(archived,false)).
      This account has many live list-triggered flows, most of them named
      EXCLUDE_BAD-DOMAINS_Segment-*. Ignore those, ignore drafts, and ignore
      non-welcome list-triggered flows like sunset/unengaged; do not filter on
      any name prefix. Find the live welcome flow, then get_flow on it with
      additional_fields_flow ["definition"] and fields_flow
      ["definition.triggers"] to read its trigger list id. If that id is not
      XgGmh3, write "unavailable" for list growth and state that the reporting
      segment needs repointing.

   b. query_segment_series with filter equals(segment_id,"RPrzLc"), interval
      "daily", statistics ["net_members_changed","total_members"], timeframe =
      the reporting window.

   c. COVERAGE CHECK: if total_members is 0 on any day in the window, OR the
      window includes 2026-09-21 (the segment's creation date, when Klaviyo
      recorded the entire existing membership as "added"), write "unavailable".
      Never report a partial or creation-inflated sum.

   d. Otherwise sum net_members_changed across every daily bucket and report
      that sum as a single number. Nothing else. Work the arithmetic
      explicitly — list every bucket before adding.

4. Round revenue to whole USD with thousands separators ($40,093).

OUTPUT — exactly this format, nothing else. No send counts, no bracketed
annotations, no commentary, no caveats, no notes below the report. It must
be copy-pasteable as-is:

Week: [start date] – [end date]

Campaign A -  $XYZ
Campaign B -  $XYZ
Campaign C -  $XYZ

Weekly flow revenue: [total]
Weekly campaign revenue: [total]
Weekly list growth: [net]

RULES:
- Never estimate or interpolate. If a number can't be retrieved, write
  "unavailable" on that line and nothing else.
- If no campaigns sent in the window, write "No campaigns sent this week".
- Campaign revenue total must equal the sum of the campaign lines.
```

---

## Reference table

| Client | Server | Currency | Timezone | Placed Order (Shopify) | Signup list | Reporting segment |
|---|---|---|---|---|---|---|
| Nootri | `Nootri_Klaviyo` | PLN | Europe/Warsaw | `TdLYYe` | Popup `S2p2m3` | `Yi78NB` (created 17 Sep) |
| femdisc UG | `Klaviyo` | EUR | Europe/Berlin | `WcePh5` | Newsletter `T6sQea` | `XSdM7F` (created 21 Sep) |
| Patriot Shave | `Patriot_Shave` | USD | US/Mountain | `TRxuzn` | Newsletter `WE7GgV` | `WhEEuR` (created 21 Sep) |
| UK.PROTEIN.COM | `Protein_UK` | GBP | US/Eastern | `WhJsF3` | Newsletter `TaDdzU` | `WmPqMm` (created 21 Sep) |
| Stars + Honey | `S_H` | USD | US/Eastern | `VazWsM` | Newsletter `XgGmh3` | `RPrzLc` (created 21 Sep) |

The reporting segments are created once and never touched again. They are
read-only mirrors of the signup list, so the segment count does not grow week
over week.

First exact list-growth figure for **all five** clients: **Wed 30 September**
(window Wed 23 – Tue 29). On Wed 23 September, every client prints
`unavailable` on the list-growth line, because that window predates the
segments and Klaviyo does not backfill membership snapshots.
