(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"2mCb":function(e,t,a){},"59G+":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("q1tI"),n=a.n(l),i=a("eynx"),o=a("JI6e"),r=a("Wbzz");function c(e){var t=e.imgName,a=e.caption,l=e.linkTo;return n.a.createElement(o.a,{xs:12,md:4},n.a.createElement(r.Link,{to:l},n.a.createElement(i.a,{imgName:t,caption:a})))}},eynx:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("2mCb");var l=a("q1tI"),n=a.n(l),i=a("Wbzz"),o=a("9eSz"),r=a.n(o),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var t=e.imgName,a=e.caption;if(c.includes(t))return n.a.createElement("p",null,"TODO");var l=Object(i.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(r.a,{alt:t,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,a))))):null}},"u/ok":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var l=a("q1tI"),n=a.n(l),i=a("4/Vk"),o=a("7oih"),r=a("7vrA"),c=a("6+GL"),m=a("3Z9Z"),u=a("59G+"),s=a("pJaR"),p=a("Wbzz"),h=a("Hrqu"),d=a("JI6e"),E=a("ZJrt"),g=a("eynx"),f=a("gMBH");function w(){return n.a.createElement(o.a,{title:"Line chart",isTocEnabled:!0},n.a.createElement(i.a,{title:"Line Chart",description:"<p>A <a href='https://www.data-to-viz.com/graph/line.html'>line chart</a> displays the evolution of one or several numeric variables. It is one of the most common chart type, so it can be build using any python viz library, like <code>matplotlib</code>, <code>seaborn</code> or <code>plotly</code>.</p>"}),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(d.a,{md:6},n.a.createElement("p",null,"Making a simple line chart with ",n.a.createElement("code",null,"matplotlib")," is pretty straightforward thanks to the ",n.a.createElement("code",null,"plot()")," function."),n.a.createElement("p",null,"If you provide only a series of values, it will consider that these values are ordered and will use values from 1 to n to create the X axis.🔥"),n.a.createElement("p",null,"For more control on the chart, see the dedicated section below.")),n.a.createElement(d.a,{md:6},n.a.createElement(p.Link,{to:"/120-line-chart-with-matplotlib"},n.a.createElement(g.a,{imgName:"120_Basic_lineplot2",caption:"The most basic histogram one can make with python and seaborn"})))),n.a.createElement(E.a,null,"# libraries\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# create data\nvalues=np.cumsum(np.random.randn(1000,1))\n\n# use the plot function\nplt.plot(values)\n")),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Matplotlib"},n.a.createElement(h.b,null),"Line chart with ",n.a.createElement("code",null,"Matplotlib")),n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," is a great fit to build line charts thanks to its ",n.a.createElement("code",null,"plot()")," function. The ",n.a.createElement(p.Link,{to:"/120-line-chart-with-matplotlib"},"first chart")," of this section explains how to use ",n.a.createElement("code",null,"plot()")," from any kind of data input format. The ",n.a.createElement(p.Link,{to:"/121-line-chart-customization"},"next one")," goes deep into chart customization (line width, color aspect and more)."),n.a.createElement(m.a,null,n.a.createElement(u.a,{imgName:"120_Basic_lineplot1",caption:"How to build a basic line chart with python from any kind of input format",linkTo:"/120-line-chart-with-matplotlib"}),n.a.createElement(u.a,{imgName:"121_Custom_line_plot3",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/121-line-chart-customization"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Multiple groups"},n.a.createElement(h.b,null),"Line chart with several groups (",n.a.createElement("code",null,"Matplotlib"),")"),n.a.createElement("p",null,"A line chart with multiple groups allows to show the evolution of several items on the same figure. It is powerful but can quickly turn into a ",n.a.createElement("a",{href:"https://www.data-to-viz.com/caveat/spaghetti.html"},"spaghetti chart"),": when too many lines are displayed they get hard to read. The examples below explain how to build one, and what are the alternative to show your data a better way."),n.a.createElement(m.a,null,n.a.createElement(u.a,{imgName:"122_Multiple_line_plot",caption:"Line chart with multiple groups",linkTo:"/122-multiple-lines-chart"}),n.a.createElement(u.a,{imgName:"123_Highlight_a_line",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/123-highlight-a-line-in-line-plot"}),n.a.createElement(u.a,{imgName:"124_Spaghetti_plot",caption:"Line chart with multiple groups",linkTo:"/124-spaghetti-plot.ipynb"}),n.a.createElement(u.a,{imgName:"125_Lineplot_small_multiple_v2",caption:"Line chart and small multiple",linkTo:"/125-small-multiples-for-line-chart"}),n.a.createElement(u.a,{imgName:"125_Lineplot_small_multiple",caption:"Line chart and small multiple (variation)",linkTo:"/125-small-multiples-for-line-chart"}))),n.a.createElement(f.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(r.a,null,n.a.createElement(s.a,{chartFamily:"evolution"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement(c.a,null)),n.a.createElement(f.a,null))}}}]);
//# sourceMappingURL=component---src-pages-line-chart-js-9fb41acb95bf5d17d601.js.map