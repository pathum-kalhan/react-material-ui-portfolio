import React from "react";
import {
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Button,
  TableCell,
  TableBody,
  Box,
} from "@material-ui/core";
import projectsList from "../apis/getProjects";

import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import LanguageIcon from "@material-ui/icons/Language";

import "../styles/util.scss";
import "../styles/projects-page.scss";

interface Media {
  android?: string;
  ios?: string;
  images?: string[];
  link?: string;
}

interface Project {
  name: string;
  client: string;
  role: string;
  techs: string[];
  description: string[];
  media: Media;
}
export default function Projects() {
  const items: Project[] = projectsList;

  const navigate = (link: string) => {
    window.location.href = link;
  };

  return (
    <Grid container className="extra-space-x">
      <Grid item md={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table-cell" align="left">
                  Project
                </TableCell>
                <TableCell className="table-cell" align="left">
                  Client
                </TableCell>
                <TableCell className="table-cell" align="left">
                  Role
                </TableCell>
                <TableCell className="table-cell" align="center">
                  Tech stack
                </TableCell>
                <TableCell className="table-cell" align="center">
                  Description
                </TableCell>
                <TableCell className="table-cell" align="center">
                  Media / Links
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row: Project) => (
                <TableRow key={row.name}>
                  <TableCell className="table-cell todo-list__task-name">
                    {row.name}
                  </TableCell>
                  <TableCell className="table-cell">{row.client}</TableCell>
                  <TableCell className="table-cell">{row.role}</TableCell>
                  <TableCell className="table-cell">
                    <ul>
                      {row.techs.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="table-cell">
                    <ul>
                      {row.description.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="table-cell" align="center">
                    {row.media && row.media.android && (
                      <Box mb={1}>
                        <Button
                          variant="contained"
                          size="small"
                          className="project__button"
                          onClick={() => navigate(row.media.android!)}
                        >
                          <AndroidIcon />
                          Android
                        </Button>
                      </Box>
                    )}
                    {row.media && row.media.ios && (
                      <Box>
                        <Button
                          variant="contained"
                          size="small"
                          className="project__button"
                          onClick={() => navigate(row.media.ios!)}
                        >
                          <AppleIcon />
                          IOS
                        </Button>
                      </Box>
                    )}
                    {row.media && row.media.link && (
                      <Box>
                        <Button
                          variant="contained"
                          size="small"
                          className="project__button"
                          onClick={() => navigate(row.media.link!)}
                        >
                          <LanguageIcon />
                          Web
                        </Button>
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
