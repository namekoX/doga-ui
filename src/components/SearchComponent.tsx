import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, CardActions, CardContent, FormHelperText, Grid, MenuItem, Paper, Select, Tab, Table, TableBody, TableCell, TableContainer, TableRow, Tabs, TextField, Typography } from "@material-ui/core";
import SearchState from "../types/SearchState";
import { SearchContext } from "../context/SearchContext";
import { Helmet } from 'react-helmet';
import Const from '../common/const';
import { Item } from '../types/GetIndexDataRes';
import CircularProgress from '@material-ui/core/CircularProgress';

const rows = (items: Item[] | undefined, kind: string) => {
  const target = items?.filter(entry => entry.id !== "" && entry.kind === kind);
  const ret = target?.map((entry) => {
    const linkto = entry.kind === "youtube" ? "https://www.youtube.com/watch?v=" + entry.id :
      entry.kind === "niconico" ?"https://www.nicovideo.jp/watch/" + entry.id:
      entry.id;
    return (
      <TableRow key={entry.id}>
        <TableCell component="th" scope="row">
          <a
            href={linkto}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={entry.thumbnail}
              style={{
                width: 240,
                height: 200
              }}
              alt={entry.title}
            />
          </a>
        </TableCell>
        <TableCell>
          <a
            href={linkto}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom variant="h6">
                  <strong>{entry.title}</strong>
                </Typography>
                <Typography color="textSecondary">
                  {entry.channelTitle}
                </Typography>
                <Typography variant="body2" component="p">
                  <div
                    dangerouslySetInnerHTML={{ __html: entry.description }}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                投稿日:{entry.publishTime.substring(0, 10)}
              </CardActions>
            </Card>
          </a>
        </TableCell>
      </TableRow>
    );
  });

  return ret;
};

type propTypes = {
  children: any,
  index: number,
  value: number | undefined,
};

function TabPanel(props: propTypes) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SearchComponent = () => (

  <SearchContext.Consumer>
    {(props: SearchState | undefined) => {
      const handleChange = (e: any, newValue: number) => {
        props?.setValue(newValue);
      };

      return (
        <>
          <Helmet>
            <title>{Const.SITE_NAME}</title>
          </Helmet>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                label="検索ワード"
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                value={props?.q}
                onChange={(e: any) => props?.setKeyword(e.target.value)}
                onKeyPress={(e: any) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    props?.onSearch();
                  }
                }}
              />
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={10}>
              <Accordion style={{ margin: 8 }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography >オプション</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <FormHelperText>並び順</FormHelperText>
                        <Select
                          value={props?.order}
                          onChange={(e: any) => props?.setOrder(e.target.value)}
                          style={{ margin: 8, minWidth: 150 }}
                        >
                          <MenuItem value="relevance">関連性</MenuItem>
                          <MenuItem value="date">投稿日</MenuItem>
                          <MenuItem value="viewCount ">再生回数</MenuItem>
                          <MenuItem value="rating">評価</MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={6}>
                        <FormHelperText>対象サイト</FormHelperText>
                        <Select
                          value={props?.kind}
                          onChange={(e: any) => props?.setKind(e.target.value)}
                          style={{ margin: 8, minWidth: 150 }}
                        >
                          <MenuItem value="all">すべて</MenuItem>
                          <MenuItem value="youtube">youtube</MenuItem>
                          <MenuItem value="niconico">ニコニコ動画</MenuItem>
                          <MenuItem value="fc2">FC2動画</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={2}>
            </Grid>
            <Grid item xs={2}>
              {props?.isLoading ? <CircularProgress /> :
                <Button
                  style={{ margin: 8 }}
                  variant="contained"
                  onClick={() => { props?.onSearch() }}
                >
                  検索
                </Button>
              }
            </Grid>
            <Grid item xs={10}>
            </Grid>
          </Grid>
          <Paper square>
            <Tabs value={props?.value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="youtube" {...a11yProps(0)} />
              <Tab label="ニコニコ動画" {...a11yProps(1)} />
              <Tab label="FC2動画" {...a11yProps(2)} />
            </Tabs>
          </Paper>
          <TabPanel value={props?.value} index={0}>
            <TableContainer >
              <Table aria-label="simple table">
                <TableBody>
                  {props?.isLoading ? <CircularProgress /> : props?.errorMsg ? props?.errorMsg : rows(props?.items, "youtube")}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={props?.value} index={1}>
            <TableContainer >
              <Table aria-label="simple table">
                <TableBody>
                  {props?.isLoading ? <CircularProgress /> : props?.errorMsg ? props?.errorMsg : rows(props?.items, "niconico")}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={props?.value} index={2}>
            <TableContainer >
              <Table aria-label="simple table">
                <TableBody>
                  {props?.isLoading ? <CircularProgress /> : props?.errorMsg ? props?.errorMsg : rows(props?.items, "fc2")}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
        </>
      );
    }}
  </SearchContext.Consumer>
);

export default SearchComponent;