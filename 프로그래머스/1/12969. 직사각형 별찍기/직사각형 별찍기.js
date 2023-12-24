process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const i = data.split(' ')[0];
    const j = data.split(' ')[1];
    for(let repeat = 0 ; repeat<j ; repeat++){
        console.log('*'.repeat(i));
    }
});