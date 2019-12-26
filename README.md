# ceti-institute.github.io
website for ceti institute

## WLF 2020

A microsite for the Winter Lights 2020 Festival. 

The projects and participants are populated via the `data.js` file. For any imagery, make sure it goes in its appropriate folder:

`images/participants/`for any participant avatars (~300px w, square)
`images/partners/` for any partner logos (~300px w)
`images/projects/` for any projects created at the WLF.

For projects, both a thumbnail (~300px w) and large image (~1000px w) should be created, named the same, and placed in their respective folders. 

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
