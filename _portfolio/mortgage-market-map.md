---
layout: post
title: Nonbank Mortgage Lending Map
permalink: /mortgage-market-map/
thumbnail-path: "img/mortgage-market-map.png"
short-description: An interactive map for the Brookings Institution charting the rise in nonbank mortgage lending after the Great Recession.

---

{:.center}
![]({{ site.baseurl }}/img/mortgage-market-map.png)

### Explanation

As part of a retrospective event on the 10-year anniversary of the financial crisis, the Economic Studies program at Brookings produced a number of research looking into the causes of the crisis. I created an [interactive map](https://www.brookings.edu/blog/up-front/2018/09/10/mapping-the-boom-in-nonbank-mortgage-lending-and-understanding-the-risks/) using d3 to accompany one such piece. The map shows where the share of nonbank mortgages are greatest in the U.S. On hover over a county, a tool tip displays both the percentage of all mortgages as well as the county name.

### Problem

One problem I encountered while designing this interactive was getting the code to work on the Brookings site. The interactive lived in a frame on the webpage, meaning I had a number of problems to work around to get the tooltip to display correctly.

### Solution

Ultimately, it was a lot of trial and error to reach the finished product but it was a good exercise in design for clients who's websites I am unfamiliar with and finding solutions to those problems.

{:.center}
![]({{ site.baseurl }}/img/mortgage-market-map-tooltip.png)
