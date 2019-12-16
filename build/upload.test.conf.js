const dest ={
    host: '192.168.1.47',
    username: 'top',
    password: '123456',
};
const staticPath = {path: '/var/com/bak/public/static/'};
const staticDevPath = 'dist/static';
const indexPath = {path: '/var/com/bak/resources/views/index.blade.php'};
const indexDevPath = 'dist/index.html';
const staticDest = {};
const indexDest = {};
Object.assign(staticDest,dest,staticPath);
Object.assign(indexDest,dest,indexPath);
module.exports={
    STATIC_DEST:staticDest,
    STATIC_DEV_PATH:staticDevPath,
    INDEX_DEST:indexDest,
    INDEX_DEV_PATH:indexDevPath,
};
