class PropertyUtils {
    getValue(obj, path) {
        return String(path)
            .replace(/\[(\w+)\]/g, '.$1')
            .replace(/^\./, '')
            .split('.')
            .reduce((acc, part) => acc && acc[part], obj)
    }

    setValue(obj = {}, path, value) {
        let i
        let array = String(path).replace(/^\./, '').split('.')
        for (i = 0; i < array.length - 1; i++) {
            if (!obj[array[i]]) obj[array[i]] = {}
            obj = obj[array[i]]
        }
        obj[array[i]] = value
    }
}

export default new PropertyUtils()
