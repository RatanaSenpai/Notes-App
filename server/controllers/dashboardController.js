/**
 * GET /
 * Dashboard
 */

exports.dashboard = async (req, res) => {
  const locals = {
    title: 'Dashboard',
    description: 'Free NodeJS Notes app.',
  };

  res.render('dashboard/index', {
    locals,
    layout: '../views/layouts/dashboard',
  });
};
