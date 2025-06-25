import { motion } from 'framer-motion';

const CodePreview = () => {
  const codeSnippet = `import { AuthG } from '@authg/react';

const auth = new AuthG({
  domain: 'your-domain.authg.com',
  clientId: 'YOUR_CLIENT_ID'
});

function App() {
  return (
    <AuthGProvider auth={auth}>
      <LoginButton />
    </AuthGProvider>
  );
}`;

  return (
    <div className="bg-dark-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Implement AuthG in any application
            <br />
            <span className="text-accent-green">in just 5 minutes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Just a few lines of code and you're ready to go
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-dark-200 rounded-xl p-6 border border-gray-800"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </motion.div>

          {/* Platform Icons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white text-lg mb-6">Available for all major platforms</p>
            <div className="grid grid-cols-5 gap-4 justify-items-center">
              {['React', 'Vue', 'Angular', 'Node.js', 'Python'].map((platform, index) => (
                <motion.div
                  key={platform}
                  className="w-12 h-12 bg-dark-100 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="text-2xl">{platform === 'React' ? '⚛️' : platform === 'Vue' ? '🟢' : platform === 'Angular' ? '🔴' : platform === 'Node.js' ? '💚' : '🐍'}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodePreview; 