

# Broken Builds
Usually its in the .css/.scss file where my [build breaks](https://github.com/ricoThaka/compiling/actions/runs/11040779623/job/30784563669). i was porting some old code from BubblegumPop, a repo my friend an spouse uses to do something with her girlfriends when social media breaks... Now im being asked for new functionality bc `actions/upload-artifact@v4 or later` is not present. I had to add to the Buildfile and now the site and 3 other sites are not complaining and accepting new MarkDown and MarkUp [i shared a cheetsheet below ](#MArkDown-QuickFacts).

`Artifacts allow you to share data between jobs in a workflow and store data once that workflow has completed.`

### [About workflow artifacts](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow)

```log
Found 0 artifact(s)
##[debug]List artifact count: 0
Error: Fetching artifact metadata failed. Is githubstatus.com reporting issues with API requests, Pages, or Actions? Please re-run the deployment at a later time.
Error: Error: No artifacts named "github-pages" were found for this workflow run. Ensure artifacts are uploaded with actions/upload-artifact@v4 or later.
    at getArtifactMetadata (/home/runner/work/_actions/actions/deploy-pages/v4/src/internal/api-client.js:85:1)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at Deployment.create (/home/runner/work/_actions/actions/deploy-pages/v4/src/internal/deployment.js:66:1)
    at main (/home/runner/work/_actions/actions/deploy-pages/v4/src/index.js:30:1)
Error: Error: No artifacts named "github-pages" were found for this workflow run. Ensure artifacts are uploaded with actions/upload-artifact@v4 or later.
##[debug]Node Action run completed with exit code 1
##[debug]Finishing: Deploy to GitHub Pages
```



Like a pussy i turned off [linting](https://docs.github.com/en/contributing/collaborating-on-github-docs/using-the-content-linter). `The linter uses markdownlint as the framework to perform checks, report flaws, and automatically fix content, when possible. `  It was really helping me grow as an [HTML PRogrammer](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics) some argue its not a [Programming Language](https://github.com/resources/articles/software-development/what-is-a-programming-language) theres just different types and HTNL is a [Markup Language](https://en.wikipedia.org/wiki/Markup_language). From my understanding at this point [MarkDown](https://www.markdownguide.org/) is just a collapesed subset that reducses the steps to publish text to device. Like theres no [KramDown](https://kramdown.gettalong.org/) object or [Video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) without knowing [LiquiD](https://jekyllrb.com/docs/liquid/)



- [Rashard MRO](https://ricothaka.github.io/rashardmro/)

[Embedding videos #91 [KramDown User 2014]](https://github.com/mmistakes/minimal-mistakes/issues/91)

`I haven't been able to insert a video so far. I'm using:`
```html

<iframe src="https://www.youtube.com/watch?v=MU9sobaVx6I" width="560" height="315" frameborder="0"> </iframe>
```

[Is HTML a programming language? - theserverside.com](https://www.theserverside.com/feature/Is-HTML-a-programming-language)


# The Build File 

Here is the old Build file and the added and updated file is belo, i embedded a gist to see if my browser will throw that 200error

```yml
on:
  push:
  pull_request:
    types: [opened, synchronize]
jobs:
  build:
    runs-on: ubuntu-latest
    name: script/cibuild
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.2.0
          bundler-cache: true
      - name: build
        run: script/bootstrap
      - name: test
        run: script/cibuild
```

### updated

```yml
on:
  push:
  pull_request:
    types: [opened, synchronize]
jobs:
  build:
    runs-on: ubuntu-latest
    name: script/cibuild
    steps:
      - uses: actions/checkout@v4
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.0
          bundler-cache: true
      - name: build
        run: script/bootstrap
      - name: test
        run: script/cibuild
  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```




<script src="https://gist.github.com/ricoThaka/566d7f15a49f45fc5f782f3448caa778.js"></script>


## MArkDown-QuickFacts

# [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
Create sophisticated formatting for your prose and code on GitHub with simple syntax.

# A first-level heading
## A second-level heading
### A third-level heading


[ANCHoRLiNKS](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#section-links)

# Example headings

## Sample Section

## This'll  be a _Helpful_ Section About the Greek Letter Θ!
A heading containing characters not allowed in fragments, UTF-8 characters, two consecutive spaces between the first and second words, and formatting.

## This heading is not unique in the file

TEXT 1

## This heading is not unique in the file

TEXT 2

# Links to the example headings above

Link to the sample section: [Link Text](#sample-section).

Link to the helpful section: [Link Text](#thisll--be-a-helpful-section-about-the-greek-letter-Θ).

Link to the first non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file).

Link to the second non-unique section: [Link Text](#this-heading-is-not-unique-in-the-file-1).


![Mars HElicopter](https://photojournal.jpl.nasa.gov/archive/PIA25321.gif)
![Curiosity](https://photojournal.jpl.nasa.gov/archive/PIA17938.gif)
![Betty's Rock](https://photojournal.jpl.nasa.gov/jpegMod/PIA25656_modest.jpg)

![NASAJPL](https://upload.wikimedia.org/wikipedia/commons/b/b6/NASA_Jet_Propulsion_Laboratory_%28JPL%29_Logo.webp)
![ECOSTRESS](https://ecostress.jpl.nasa.gov/logo.png)