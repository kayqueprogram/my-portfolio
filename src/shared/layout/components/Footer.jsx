'use client';

import { Footer } from 'flowbite-react';


function DefaultFooter() {
  return (
    <Footer container className="justify-between">
      <Footer.Copyright
        by="Sirius.sh™"
        href="https://github.com/kayqueprogram"
        year={2023}
      />
      <Footer.LinkGroup>
        <Footer.Link href="/projects">
          Projetos
        </Footer.Link>
        <Footer.Link href="/contact">
          Contato
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default DefaultFooter


