const TemplateEngine = {
    render(template, data) {
        let output = template;

        //1. Handle
        output = output.replace(/\{\{#each (\w+)\}\}([\s\S]*?)\{\{\/each\}\}/g, (match, arrayName, innerTemplate) => {
            const array = data [arrayName];
            if (!Array. isArray(array)) {
                return '';
            } else {
                return array.map(item => this.render (innerTemplate, item)).join('');
            }
                
        });


        //2. Handle
        output = output.replace(/\{\{(\w+)\}\}/g, (match, key) => {
            const value = data[key];
            if (value !== undefined) {
                return String(value);
            } else {
                return '';
            };
        });

        return output;

    },



    async fetchAndRender(jsonUrl, templateId, containerId, dataKey, validator = null) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '<p class="loading">Loading data...</p>';

        try {
            const response = await fetch(jsonUrl);
            if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

            const data = await response.json();

            if (validator) {
                const result = validator(data);
                if (!result.valid) {
                    container.innerHTML = `<p class="error">Data validation failed: ${result.errors.join(', ')}</p>`;
                    console.error('Validation errors:', result.errors);
                    return;
                }
            }
            const templateEl = document.getElementById(templateId);
            if (!templateEl) throw new Error(`Template #${templateId} not found`);

            const template = templateEl.innerHTML;
            const rendered = this.render(template, data);
            container.innerHTML = rendered;
        } catch (err) {
            container.innerHTML = `<p class="error">Failed to load content: ${err.message}</p>`;
            console.error(err);
        }
    }

};


