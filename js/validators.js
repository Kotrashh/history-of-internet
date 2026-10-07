const Validators = {
    validateTimeline(data) {
        const errors = [];
        
        if (!data || typeof data !== 'object') {
            errors.push('Data must be JSON object');
            return {valid: false, errors};
        };
        if (!Array.isArray(data.events)) {
            errors.push('Missing required field: "events" array');    
        } else {
            data.events.forEach((event, i) => {
                if(!event.id) errors.push(`events[${i}]: missing "id"`);
                if(!event.year) errors.push(`events[${i}]: missing "year"`);
                if(!event.title) errors.push(`events[${i}]: missing "title"`);
                if(!event.description) errors.push(`events[${i}]: missing "description"`);
                if(typeof event.year === 'string') errors.push(`events[${i}]: "year" should be a number`);
            });
        }

        return {valid: errors.length === 0, errors};
    },
    validateMobile(data) {
        const errors = [];
        if(!data || typeof data !== 'object') {
            errors.push('Data must be a JSON object');
        }
        if(!Array.isArray(data.milestones)) {
            errors.push('Missing required field: "milestones" array');            
        } else {
            data.milestones.forEach((m, i) => {
                if (!m.id) errors.push(`milestones[${i}]: missing "id"`);
                if (!m.year) errors.push(`milestones[${i}]: missing "id"`);
                if (!m.title) errors.push(`milestones[${i}]: missing "id"`);
                if (!m.description) errors.push(`milestones[${i}]: missing "id"`);
            });
        }
        return {valid: errors.length === 0, errors};
    },
    validateCensorship(data) {
        const errors = [];

        if(!data || typeof data !== 'object') {
            errors.push('Data must be a JSON object');
            return {valid: false, errors};
        }
        if(!Array.isArray(data.incidents)) {
            errors.push('Missing required field: "incidents" array');
        } else {
            data.incidents.forEach((inc, i) => {
                if (!inc.id) errors.push(`incidents[${i}]: missing "id"`);
                if (!inc.year) errors.push(`incidents[${i}]: missing "year"`);
                if (!inc.title) errors.push(`incidents[${i}]: missing "title"`);
                if (!inc.description) errors.push(`incidents[${i}]: missing "description"`);
                if (!inc.duration) errors.push(`incidents[${i}]: missing "duration"`);
            });
        }
        return {valid: errors.length === 0, errors};
    }

};