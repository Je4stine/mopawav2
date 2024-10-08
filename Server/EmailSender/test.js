async function decodeSecrete(url){
    try {
        const response = await axios.get(url)
        
        if(response.status != 200){
            console.log("Error getting the document")
        }

    
       // const data = response.text
        const docLines = response.data.split('\n')
       // console.log(docLines)
        const characterPositions = {}

        docLines.forEach( docLine =>{
            const separateTheCordinates = docLine.split(',')

            if( separateTheCordinates.length === 3){
                const chars = separateTheCordinates[0]
                const x = parseInt(separateTheCordinates[1], 10)
                const y = parseInt(separateTheCordinates[2], 10)

                characterPositions[`${x},${y}`] = chars
            }
        })
        
        let maxGridX = 0;
        let maxGridY = 0;

        Object.keys(characterPositions).forEach(key => {
            const [x, y] = key.split(',').map(Number);
            if (x > maxGridX) maxGridX = x;
            if (y > maxGridY) maxGridY = y;
          });

          const grid = Array.from({ length: maxGridY + 1 }, () => Array(maxGridX + 1).fill(' '));

          Object.entries(characterPositions).forEach(([key, char]) => {
            const [x, y] = key.split(',').map(Number);
            if (!isNaN(x) && !isNaN(y)) {
              grid[y][x] = char;
            } else {
              console.error(`Ignoring invalid coordinate: ${key}`);
            }
          });

          grid.forEach(row => console.log(row.join('')));

    } catch (error) {
        console.log(error)
    }
}