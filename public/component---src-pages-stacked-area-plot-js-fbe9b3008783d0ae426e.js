(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),r=t.n(n),l=t("eynx"),c=t("JI6e"),o=t("Wbzz");function i(e){var a=e.imgName,t=e.caption,n=e.linkTo;return r.a.createElement(c.a,{xs:12,md:4},r.a.createElement(o.Link,{to:n},r.a.createElement(l.a,{imgName:a,caption:t})))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("2mCb");var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),c=t("9eSz"),o=t.n(c),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var a=e.imgName,t=e.caption;if(i.includes(a))return r.a.createElement("p",null,"TODO");var n=Object(l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(o.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}},mjpD:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return y}));var n=t("q1tI"),r=t.n(n),l=t("4/Vk"),c=t("7oih"),o=t("7vrA"),i=t("6+GL"),s=t("3Z9Z"),m=t("59G+"),d=t("pJaR"),h=t("Wbzz"),u=t("Hrqu"),p=t("JI6e"),E=t("ZJrt"),g=t("eynx"),k=t("gMBH"),f=t("cWnB");function y(){return r.a.createElement(c.a,{title:"Stacked area chart",isTocEnabled:!0},r.a.createElement(l.a,{title:"Stacked area Chart",description:"<p>A <a href='https://www.data-to-viz.com/graph/stackedarea.html'>stacked area chart</a> displays the evolution of a numeric variable for several groups of a dataset. Each group is displayed on top of each other, making it easy to read the evolution of the total, but hard to read each group value accurately. In python, stacked area charts are mainly done thanks to the <code>stackplot()</code> function</p>"}),r.a.createElement(o.a,null,r.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),r.a.createElement(s.a,{className:"align-items-center"},r.a.createElement(p.a,{md:6},r.a.createElement("p",null,"Here is a quick start code snippet to demo how the ",r.a.createElement("code",null,"stackplot()")," function of ",r.a.createElement("code",null,"matplotlib")," works."),r.a.createElement("p",null,"Note that here each groups are provided in its own vector of values. The ",r.a.createElement(h.Link,{to:"/250-basic-stacked-area-chart"},"basic stacked area")," blog post explains how to use the function from any type of data format.")),r.a.createElement(p.a,{md:6},r.a.createElement(h.Link,{to:"/250-basic-stacked-area-chart"},r.a.createElement(g.a,{imgName:"250_basic_stacked_area_chart",caption:"The most basic stacked area chart one can make with python and matplotlib"})))),r.a.createElement(E.a,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny1=[1,4,6,8,9]\ny2=[2,2,7,10,12]\ny3=[2,8,5,10,6]\n\n# Basic stacked area chart.\nplt.stackplot(x,y1, y2, y3, labels=['A','B','C'])\nplt.legend(loc='upper left')\n")),r.a.createElement(k.a,null),r.a.createElement("div",{className:"greySection",id:"warning"},r.a.createElement(o.a,null,r.a.createElement("h2",{id:"Warning"},"⚠️ The issue with stacking"),r.a.createElement("p",null,"Stacked area charts must be used with care since they suffer a number of caveats. They are appropriate to study the evolution of the whole and the relative proportions of each group, but not to study the evolution of each individual group."),r.a.createElement("p",null,"For instance, it is pretty hard to understand how the green group evolves on the chart below. Can you spot if its value is increasing, decreasing or stable?"),r.a.createElement("a",{href:"https://www.data-to-viz.com/caveat/stacking.html"},r.a.createElement(f.a,{size:"sm"},"Read more")),r.a.createElement("div",{style:{maxWidth:"400px",margin:"0 auto",padding:30}},r.a.createElement("a",{href:"https://www.data-to-viz.com/caveat/stacking.html"},r.a.createElement(g.a,{imgName:"issue-with-stacking",caption:"It is hard to see how the green group evolves."}))))),r.a.createElement(k.a,null),r.a.createElement(o.a,null,r.a.createElement("h2",{id:"Matplotlib"},r.a.createElement(u.b,null),"Stacked Area chart with ",r.a.createElement("code",null,"Matplotlib")),r.a.createElement("p",null,r.a.createElement("code",null,"Matplotlib")," is the most common way to build a stacked area chart with Python. The examples below start by explaining to basics of the ",r.a.createElement("code",null,"stackplot()")," function. The also describe the most common type of customization like changing colors, controling group order and more."),r.a.createElement(s.a,null,r.a.createElement(m.a,{imgName:"250_basic_stacked_area_chart",caption:"Most basic stacked area chart",linkTo:"/250-basic-stacked-area-chart"}),r.a.createElement(m.a,{imgName:"251_seaborn_style_on_stacked_area_chart",caption:"Apply seaborn style on the matplotlib stacked area chart",linkTo:"/251-stacked-area-chart-with-seaborn-style"}),r.a.createElement(m.a,{imgName:"253_color_and_stacked_area_chart2",caption:"Control area colors",linkTo:"/253-control-the-color-in-stacked-area-chart"}),r.a.createElement(m.a,{imgName:"242_area_chart_and_faceting",caption:"Area chart and small multiple",linkTo:"/242-area-chart-and-faceting"}))),r.a.createElement(k.a,null),r.a.createElement(o.a,null,r.a.createElement("h2",{id:"Percent stacked"},r.a.createElement(u.b,null),"Percent Stacked Area chart with ",r.a.createElement("code",null,"Matplotlib")),r.a.createElement("p",null,"A variation of the stacked area graph is the percent stacked area graph where the value of every groups are normalized at each time stamp. It allows to study the percentage of each group in the whole more efficiently."),r.a.createElement("p",null,"Fortunately, the ",r.a.createElement("code",null,"pandas")," library has a ",r.a.createElement("code",null,"divide()")," function that allows to apply this normalization easily."),r.a.createElement(s.a,null,r.a.createElement(m.a,{imgName:"255_percent_stacked_area_chart",caption:"Basic percent stacked area chart",linkTo:"/255-percentage-stacked-area-chart"}))),r.a.createElement(k.a,null),r.a.createElement(o.a,null,r.a.createElement("h2",{id:"Pandas"},r.a.createElement(u.c,null),"Stacked Area chart with ",r.a.createElement("code",null,"Pandas")),r.a.createElement("p",null,r.a.createElement("code",null,"Pandas")," is mainly useful to normalize your dataset and build a stacked area chart. Surprisingly, it also provides a ",r.a.createElement("code",null,"plot.area()"),"that can be handy to build a stacked area chart."),r.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},r.a.createElement(h.Link,{to:"/254-pandas-stacked-area-chart"},r.a.createElement(g.a,{imgName:"254_pandas_stacked_area_chart2",caption:"Stacked area chart with Pandas"})))),r.a.createElement(k.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(o.a,null,r.a.createElement(d.a,{chartFamily:"evolution"}))),r.a.createElement(k.a,null),r.a.createElement(o.a,null,r.a.createElement(i.a,null)),r.a.createElement(k.a,null))}}}]);
//# sourceMappingURL=component---src-pages-stacked-area-plot-js-fbe9b3008783d0ae426e.js.map