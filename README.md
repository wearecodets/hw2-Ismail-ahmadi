# 💳 Payment Form Exercise 

> :clock9:&nbsp; &nbsp; **Due:** Saturday, July 6 @ 9 am
>
> :mag_right:&nbsp; &nbsp; **Code Review:** Thursday, July 4 
>
> Still unclear about requesting a PR review? [See the course info](https://github.com/wearecodets/phase-two/blob/master/week-zero/about.md#homework-pull-request).

## Objective

After completing this assignment, you should have five branches: `master`, `feature-accordion` and three other bug fixing branches. You need to open four PRs for code reviews.

**Do not modify `index.html`, `index.js` or `.scss` files in `src/stylesheets`. Your code should only be in `src/main.js`.**

If it's your first time working on this project, run `npm install`. Otherwise, just `npm start` to begin working.

## Branching Rules

1. Never work directly on the `master` branch. 
2. `origin/master` always represents the latest code deployed to production (Netlify).
2. Create a new branch for each homework topic:
    - Prefix your branch with `feature-` to work on new features. For example, `feature-accordion`.
    - Prefix your branch with `fix-` to work on bug fixes. For example, `fix-paypal`.

## Directions

### 1. Deploy to Production

Connect this Github repo's `master` branch to Netlify and customize the domain URL to have the same name as this homework repo – for example: `http://hw2-niko.netlify.com`. From now on, every merged PR will trigger a deployment to this URL. When you are done, [add a status badge](https://www.netlify.com/docs/continuous-deployment/#status-badges) below this line:
[![Netlify Status](https://api.netlify.com/api/v1/badges/a8dbe308-89e8-44fd-b643-8067e717ff58/deploy-status)](https://app.netlify.com/sites/hw2-ismail/deploys)

### 2. Payment Total Bug

Many angry customers reported that the payment form only shows zero amount despite the payment plan selected (annually or monthly). Your boss told you to debug the issue so the company can start making money again. He wanted to make sure that the total amount is calculated correctly. Additionally, he said that the total needs to show up in two different places in the form.

### 3. Form Submit Bug

The boss complained that the Pay button is unclickable. He said that it makes sense if customers have not selected any payment plans—but after the total is calculated, this bug is unacceptable and must be immediately fixed!

### 3. PayPal Amount Bug

Apparently, some loyal customers would still love to give the company money by using the PayPal link. However, many felt cheated when they found out the crazy amount of $1,234 was [hard coded](https://en.wikipedia.org/wiki/Hard_coding) in the `href` attribute of the link. *"Fix it!"* said the boss.

### 5. Implement Accordion Feature

After all the unexpected events, you decided be more self-initiative to win back your boss' favor. So you asked your coworkers to begin building an [FAQ section](https://en.wikipedia.org/wiki/FAQ) for the form. 

Your friends began working on an [accordion](https://en.wikipedia.org/wiki/Accordion_(GUI)) in a separate branch called `feature-accordion`. They finished the markup in `index.html` and styling in `src/stylesheets/accordion.scss`. They told you to `checkout` the branch and finish the JavaScript part with these requirements: 

  * Add the `accordion--active` class to expand each accordion item on click:

    ![active](https://res.cloudinary.com/yicf/image/upload/w_400/v1561735768/Code%20The%20Web/active.gif)

  * Only one accordion item can be shown at a time:

    ![shown](https://res.cloudinary.com/yicf/image/upload/w_400/v1561731722/Code%20The%20Web/accordion.gif)





