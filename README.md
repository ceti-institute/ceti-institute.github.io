# ceti-institute.github.io
website for ceti institute

## WLF 2020

A microsite for the Winter Lights 2020 Festival. If you will be working on this website, *please read all of the following carefully before committing any changes to this repo*.


### CSS

This project uses sass for CSS styling. To compile the sass, `npm install sass -g` and, from the `wlf2020/css` directory, run `sass --watch main.scss main.css`. *You should not edit the `main.css` file directly*.



### DATA


The projects and participants are populated via the `data.js` file. 

**Participant Links**

To simplify things, we will only be accepting participants' instagram or webpage links. The data must be cleaned - instagram handles should not include the `@` sign and webpage links should not include the `http://` or `https://` (www is okay).

**Participant Names**
In order for participants to properly be linked to their projects, their names in the `participants` array of each `projects` object must match their name in the `participants` array, e.g:

```
projects: [
    {
        participants: ['Mike Heavers',...]
    }
],
participants: [
    {
        name: 'Mike Heavers']
    }
]

```

**Participant Images**

For any imagery, make sure it goes in its appropriate folder:

`images/participants/`for any participant avatars (~300px w, square)
`images/partners/` for any partner logos (~300px w)
`images/projects/` for any projects created at the WLF.

For projects, both a thumbnail (~300px w) and large image (~1000px w) should be created, named the same, and placed in their respective folders. 

**Generating a Fresh Participants Feed**

To more easily re-generate the participants feed, you can export the Google spreadsheet as JSON, and paste / drag the file [into here](https://www.csvjson.com/csv2json), then copy the resulting JSON as the value of the `participants` key in the `data.js` file.