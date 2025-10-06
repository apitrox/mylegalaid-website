/* Light-mode baseline using CSS variables */
border - bottom
:
1
px
solid
var (
--border
)

}
.
header - inner
{
    flex;
    align - items
:
    center;
    justify - content
:
    space - between;
    64
    px;
}
.
brand
{
    inline - flex;
    align - items
:
    center;
    .5
    rem;
    text - decoration
:
    none;
    var (
    --text
)
    font - weight
:
    700;
}
.
brand - logo
{
    28
    px;
    28
    px;
}
.
brand - text
{
    font - size
:
    1.05
    rem;
    letter - spacing
:
    .2
    px;
}


.
nav - toggle
{
    none;
    transparent;
    0;
    .5
    rem;
    pointer;
}
.
nav - toggle
:
focus - visible
{
    2
    px
    solid
    var (
    --primary
)
    outline - offset
:
    2
    px;
}
.
nav - toggle - bar
{
    block;
    22
    px;
    2
    px;
    var (
    --text
)

    4
    px
    0;
}


.
site - nav
ul
{
    list - style
:
    none;
    0;
    0;
    flex;
    1
    rem;
    align - items
:
    center;
}
.
site - nav
a
{
    var (
    --text
)
    text - decoration
:
    none;
    font - weight
:
    600;
}
.
site - nav
hover
{
    var (
    --link
)

}


/* Buttons */
.
btn
{
    inline - block;
    border - radius
:
    var (
    --radius
)

    .7
    rem
    1
    rem;
    1
    px
    solid
    var (
    --border
)
    text - decoration
:
    none;
    font - weight
:
    600;
    box - shadow
:
    var (
    --shadow
)

}
.
btn - primary
{
    var (
    --primary
)

    var (
    --primary - contrast
)
    border - color
:
    transparent;
}
.
btn - primary
:
hover
{
    brightness(0.95);
}
.
btn - outline
{
    transparent;
    var (
    --text
)

}


/* Hero */
.
hero
{
    linear - gradient(180
    deg,
    var (
    --bg
),
    var (
    --bg - alt
))
    border - bottom
:
    1
    px
    solid
    var (
    --border
)

}
.
hero - inner
{
    grid;
    grid - template - columns
:
    1.2
    fr
    .8
    fr;
    2
    rem;
    align - items
:
    center;
    4
    rem
    0;
}
.
hero
h1
{
    font - size
:
    clamp(2
    rem, 2.8
    vw, 3
    rem
)
    line - height
:
    1.15;
    0
    0
    .75
    rem;
}
.
hero
p
{
    var (
    --muted
)

    0
    0
    1.25
    rem;
}
.
hero - cta
{
    flex;
    .75
    rem;
    flex - wrap
:
    wrap;
}
.
hero - art
{
    border - radius
:
    var (
    --radius
)
    box - shadow
:
    var (
    --shadow
)

    #fff;
}


/* Sections */
.
section
{
    3
    rem
    0;
}
.
section - alt
{
    var (
    --bg - alt
)
    border - top
:
    1
    px
    solid
    var (
    --border
)
    border - bottom
:
    1
    px
    solid
    var (
    --border
)

}
.
section - title
{
    font - size
:
    1.5
    rem;
    0
    0
    1.5
    rem;
}


/* Cards */
.
grid.cards
{
    grid;
    grid - template - columns
:
    repeat(3, 1
    fr
)

    1
    rem;
}
.
card
{
    #fff;
    1
    px
    solid
    var (
    --border
)
    border - radius
:
    var (
    --radius
)

    1.25
    rem;
    box - shadow
:
    var (
    --shadow
)

}
.
card
h3
{
    .75
    rem
    0
    .25
    rem;
}
.
card
p
{
    var (
    --muted
)

    0
    0
    .75
    rem;
}
.
card - link
{
    font - weight
:
    600;
    var (
    --link
)
    text - decoration
:
    none;
}
.
card - icon
{
    40
    px;
    40
    px;
}


/* Resource list */
.
resource - list
{
    0;
    0;
    list - style
:
    none;
    grid;
    .75
    rem;
}
.
resource - list
a
{
    text - decoration
:
    none;
    var (
    --link
)
    font - weight
:
    600;
}


/* Contact form */
.
contact - form
{
    grid;
    1
    rem;
    max - width
:
    640
    px;
}
.
form - row
{
    grid;
    .35
    rem;
}
input, textarea
{
    100 %;
    1
    px
    solid
    var (
    --border
)
    border - radius
:
    10
    px;
    .8
    rem
    .9
    rem;
    inherit;
    #fff;
    var (
    --text
)

}
focus, textarea
:
focus
{
    2
    px
    solid
    var (
    --primary
)
    outline - offset
:
    2
    px;
}


/* Footer */
.
site - footer
{
    var (
    --bg
)
    border - top
:
    1
    px
    solid
    var (
    --border
)

}
.
footer - inner
{
    flex;
    align - items
:
    center;
    justify - content
:
    space - between;
    1
    rem;
    1.25
    rem
    0;
}
.
footer - nav
{
    list - style
:
    none;
    flex;
    1
    rem;
    0;
    0;
}
.
footer - nav
a
{
    text - decoration
:
    none;
    var (
    --muted
)

}
.
footer - nav
hover
{
    var (
    --link
)

}


/* Responsive */
@media(max - width:
900
px
)
{
.
    hero - inner
    {
        grid - template - columns
    :
        1
        fr;
    }
.
    grid.cards
    {
        grid - template - columns
    :
        1
        fr
        1
        fr;
    }
}
@media(max - width:
640
px
)
{
.
    grid.cards
    {
        grid - template - columns
    :
        1
        fr;
    }
.
    nav - toggle
    {
        inline - block;
    }
.
    site - nav
    {
        absolute;
        0;
        0;
        64
        px;
        var (
        --bg
    )
        border - bottom
    :
        1
        px
        solid
        var (
        --border
    )

        translateY(-120 %);
        transform
        .2
        s
        ease;
    }
.
    site - nav.open
    {
        translateY(0);
    }
.
    site - nav
    ul
    {
        flex - direction
    :
        column;
        align - items
    :
        flex - start;
        .75
        rem
        1
        rem;
    }
}