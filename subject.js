module.exports = ({ shouldExit }) => {
    if (shouldExit) {
        process.exit(1);
    }

    return 'success';
}
