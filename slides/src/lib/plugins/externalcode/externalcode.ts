const Externalcode: Reveal.Plugin = {
    id: "externalcode",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    init: (_reveal) => {
      function fetchDataCodeSection(section: HTMLElement) {
        const url = section.getAttribute("data-code") || "";
        return fetch(url)
          .then((response) => response.text())
          .then((data) => {
            section.textContent = data;
          });
      }

      function fetchHtmlSection(section:HTMLElement) {
        const url = section.getAttribute("html-insert") || "";
        return fetch(url)
          .then((response) => response.text())
          .then((data) => {
            section.innerHTML = data;
          });
      }
  
      const sections = document.querySelectorAll("[data-code], [html-insert]");
      const promiseArray = new Array(sections.length);
  
      for (let i = 0, len = sections.length; i < len; i++) {
        const section = sections[i];
        if (section.getAttribute("data-code") != null) {
          promiseArray[i] = fetchDataCodeSection(section as HTMLElement);
        }

        if (section.getAttribute("html-insert") != null) {
          promiseArray[i] = fetchHtmlSection(section as HTMLElement);
        }
      }
      return Promise.all(promiseArray);
    },
  };

  export default () => Externalcode;