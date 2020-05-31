# The Hacker-Blog theme

*Hacker-Blog is a minimalistic, responsive jekyll theme built for hackers. It is based on the [hacker theme](https://github.com/pages-themes/hacker) for project pages.*

Demo: [https://ashishchaudhary.in/hacker-blog](https://ashishchaudhary.in/hacker-blog)

### Included

1. Pagination
2. SEO tags
3. Archive Page
4. About Page
5. RSS (`https://base-url/atom`)
6. Sitemap (`https://base-url/sitemap`)

## Usage

1. Fork and Clone this repository
2. Customize your blog
3. Add a new post in `_posts/` directory with proper name format (as shown in placeholder posts)
4. Commit and push to master on a repository named `<githubusername.github.io>`.
5. Visit `<githubusername>.github.io`

## Local Build

If you want to see the changes before pushing the blog to Github, do a local build.

1. [`gem install jekyll`](https://jekyllrb.com/docs/installation/#install-with-rubygems)
2. `gem install jekyll-seo-tag`
3. `gem install jekyll-paginate`
4. `gem install jekyll-sitemap`
5. (`cd` to the blog directory, then:) `jekyll serve --watch --port 8000`
6. Go to `http://0.0.0.0:8000/` in your web browser.

*Note: In case you have set a `baseurl` different than `/` in `_config.yml`, go to `http://0.0.0.0:8000/BASEURL/` instead.*

### Local build using docker

```bash
docker run --rm -p 8000:8000 \
  --volume="LOCATION_OF_YOUR_JEKYLL_BLOG:/srv/jekyll" \
  -it tocttou/jekyll:3.5 \
  jekyll serve --watch --port 8000
```

Replace `LOCATION_OF_YOUR_JEKYLL_BLOG` with the full path of your blog repository. Visit `http://localhost:8000/` to access the blog.

*Note: In case you have set a `baseurl` different than `/` in `_config.yml`, go to `http://0.0.0.0:8000/BASEURL/` instead.*

## Customizing

### Configuration variables

Edit the `_config.yml` file and set the following variables:

```yml
title: [The title of your blog]
description: [A short description of your blog's purpose]
author:
  name: [Your name]
  email: [Your email address]
  url: [URL of your website]

baseurl: [The base url for this blog.]

paginate: [Number of posts in one paginated section (default: 3)]
owner: [Your name]
year: [Current Year]
```

*Note: All links in the site are prepended with `baseurl`. Default `baseurl` is `/`. Any other baseurl can be setup like `baseurl: /hacker-blog`, which makes the site available at `http://domain.name/hacker-blog`.

### About Page

Edit `about.md`

### Layout

If you would like to modify the site style:

**HTML**

Footer: Edit `_includes/footer.html`

Header: Edit `_includes/header.html`

Links in the header: Edit `_includes/links.html`

Meta tags, blog title display, and additional CSS: Edit `_includes/head.html`

Index page layout: Edit `_layouts/default.html`

Post layout: Edit `_layouts/post.html`

**CSS**

Site wide CSS: Edit `_sass/base.scss`

Custom CSS: Make `_sass/custom.scss` and use it. Then add `@import "custom";` to `css/main.scss`

**404 page**

Edit `404.md`

## License

CC0 1.0 Universal
