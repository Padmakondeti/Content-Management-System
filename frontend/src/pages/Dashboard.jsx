import { useEffect, useState } from "react";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip,
} from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ImageIcon from "@mui/icons-material/Image";

import { getDashboardStats } from "../services/dashboard.service";

function Dashboard() {
  const [stats, setStats] = useState({
    totalPages: 0,
    publishedPages: 0,
    draftPages: 0,
    totalMedia: 0,
  });

  const [recentPages, setRecentPages] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const result = await getDashboardStats();

      setStats(result.stats);
      setRecentPages(result.recentPages);
    } catch (error) {
      console.error(error);
    }
  };

  const cards = [
    {
      title: "Total Pages",
      value: stats.totalPages,
      icon: <DescriptionIcon fontSize="large" />,
    },
    {
      title: "Published",
      value: stats.publishedPages,
      icon: <CheckCircleIcon fontSize="large" />,
    },
    {
      title: "Draft",
      value: stats.draftPages,
      icon: <EditNoteIcon fontSize="large" />,
    },
    {
      title: "Media Files",
      value: stats.totalMedia,
      icon: <ImageIcon fontSize="large" />,
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        CMS Dashboard
      </Typography>

      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} md={3} key={card.title}>
            <Card elevation={4}>
              <CardContent>
                {card.icon}

                <Typography variant="h6">
                  {card.title}
                </Typography>

                <Typography variant="h3">
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={3}
        sx={{
          mt: 5,
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
        >
          Recent Pages
        </Typography>

        <table
          width="100%"
          cellPadding="12"
        >
          <thead>
            <tr>
              <th align="left">Title</th>
              <th align="left">Status</th>
              <th align="left">Slug</th>
            </tr>
          </thead>

          <tbody>
            {recentPages.map((page) => (
              <tr key={page._id}>
                <td>{page.title}</td>

                <td>
                  <Chip
                    label={page.status}
                    color={
                      page.status === "Published"
                        ? "success"
                        : "warning"
                    }
                  />
                </td>

                <td>{page.slug}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </div>
  );
}

export default Dashboard;