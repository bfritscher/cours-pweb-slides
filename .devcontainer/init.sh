#!/bin/bash
git clone https://github.com/bfritscher/sql-slides.git /tmp/sql-slides
ln -sf $(pwd) /tmp/sql-slides/slides
npm --prefix /tmp/sql-slides install
npm --prefix /tmp/sql-slides run serve
